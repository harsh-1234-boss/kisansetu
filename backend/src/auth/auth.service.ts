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
import { Otp, OtpDocument } from './otp.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,

    @InjectModel(Otp.name)
    private readonly otpModel: Model<OtpDocument>,

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
    const existingMobile = await this.userModel.findOne({ mobile });

    if (existingMobile) {
      throw new ConflictException(
        'Mobile number already registered',
      );
    }

    if (email) {
      const existingEmail = await this.userModel.findOne({ email });

      if (existingEmail) {
        throw new ConflictException(
          'Email already registered',
        );
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      name,
      email,
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

    // Delete previous OTP
    await this.otpModel.deleteMany({ mobile });

    // Generate random 6-digit OTP
    const otp = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();

    // OTP expires after 5 minutes
    const expiresAt = new Date(
      Date.now() + 5 * 60 * 1000,
    );

    await this.otpModel.create({
      mobile,
      otp,
      expiresAt,
      attempts: 0,
    });

    // DEVELOPMENT ONLY
    // Later this will be replaced by an SMS provider.
    console.log(
      `Development OTP for ${mobile}: ${otp}`,
    );

    return {
      success: true,
      message: 'OTP sent successfully',
    };
  }

  // =========================
  // VERIFY OTP
  // =========================
  async verifyOtp(mobile: string, otp: string) {
    const user = await this.userModel.findOne({ mobile });

    if (!user) {
      throw new UnauthorizedException(
        'No account found with this mobile number',
      );
    }

    const otpRecord = await this.otpModel.findOne({ mobile });

    if (!otpRecord) {
      throw new UnauthorizedException(
        'OTP not found. Please request a new OTP.',
      );
    }

    // Check attempts
    if (otpRecord.attempts >= 5) {
      await this.otpModel.deleteOne({
        _id: otpRecord._id,
      });

      throw new UnauthorizedException(
        'Too many incorrect attempts. Please request a new OTP.',
      );
    }

    // Check expiry
    if (otpRecord.expiresAt.getTime() < Date.now()) {
      await this.otpModel.deleteOne({
        _id: otpRecord._id,
      });

      throw new UnauthorizedException(
        'OTP has expired. Please request a new OTP.',
      );
    }

    // Check OTP
    if (otp !== otpRecord.otp) {
      otpRecord.attempts += 1;
      await otpRecord.save();

      throw new UnauthorizedException(
        'Invalid OTP',
      );
    }

    // OTP successfully verified
    await this.otpModel.deleteOne({
      _id: otpRecord._id,
    });

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