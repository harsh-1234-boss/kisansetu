import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  // =========================
  // SIGNUP
  // =========================

  @Post('signup')
  async signup(
    @Body()
    body: {
      name: string;
      email?: string;
      mobile: string;
      password: string;
      role?: string;
    },
  ) {
    return this.authService.signup(
      body.name,
      body.email,
      body.password,
      body.mobile,
      body.role,
    );
  }

  // =========================
  // EMAIL + PASSWORD LOGIN
  // =========================

  @Post('login')
  async login(
    @Body()
    body: {
      email: string;
      password: string;
    },
  ) {
    return this.authService.login(
      body.email,
      body.password,
    );
  }

  // =========================
  // SEND OTP
  // =========================

  @Post('send-otp')
  async sendOtp(
    @Body()
    body: {
      mobile: string;
    },
  ) {
    return this.authService.sendOtp(
      body.mobile,
    );
  }

  // =========================
  // VERIFY OTP
  // =========================

  @Post('verify-otp')
  async verifyOtp(
    @Body()
    body: {
      mobile: string;
      otp: string;
    },
  ) {
    return this.authService.verifyOtp(
      body.mobile,
      body.otp,
    );
  }

  // =========================
  // GET CURRENT USER
  // =========================

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getMe(@Request() req: any) {
    return {
      message: 'Authenticated successfully',
      user: req.user,
    };
  }
}