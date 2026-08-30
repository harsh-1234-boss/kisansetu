import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { User, UserDocument } from '../users/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,

    private readonly jwtService: JwtService,
  ) {}

  // =========================
  // SIGNUP
  // =========================
  async signup(
    name: string,
    email: string | undefined,
    password: string,
    mobile: string,
    role: string = 'farmer',
  ) {
    // Check mobile
    const existingMobile = await this.userModel.findOne({ mobile });

    if (existingMobile) {
      throw new ConflictException('Mobile number already registered');
    }

    // Check email only if provided
    if (email) {
      const existingEmail = await this.userModel.findOne({ email });

      if (existingEmail) {
        throw new ConflictException('Email already registered');
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await this.userModel.create({
      name,
      email: email || undefined,
      mobile,
      password: hashedPassword,
      role,
    });

    return {
      success: true,
      message: 'Account created successfully',

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
    };
  }

  // =========================
  // EMAIL + PASSWORD LOGIN
  // =========================
  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }

    return this.createToken(user);
  }

  // =========================
  // SEND OTP
  // =========================
  async sendOtp(mobile: string) {
    const user = await this.userModel.findOne({ mobile });

    if (!user) {
      throw new UnauthorizedException(
        'No account found with this mobile number',
      );
    }

    // DEVELOPMENT OTP
    // Later replace this with an SMS provider.
    const otp = '123456';

    return {
      success: true,
      message: 'OTP sent successfully',
      developmentOtp: otp,
    };
  }

  // =========================
  // VERIFY OTP
  // =========================
  async verifyOtp(
    mobile: string,
    otp: string,
  ) {
    const user = await this.userModel.findOne({ mobile });

    if (!user) {
      throw new UnauthorizedException(
        'No account found with this mobile number',
      );
    }

    // DEVELOPMENT OTP
    if (otp !== '123456') {
      throw new UnauthorizedException('Invalid OTP');
    }

    return this.createToken(user);
  }

  // =========================
  // CREATE JWT
  // =========================
  private createToken(user: UserDocument) {
    const token = this.jwtService.sign({
      sub: user._id,
      email: user.email,
      mobile: user.mobile,
      role: user.role,
    });

    return {
      success: true,
      message: 'Login successful',

      access_token: token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
    };
  }
}