import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Get('me')
  async getMe(
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization) {
      throw new UnauthorizedException('Authorization token required');
    }

    const [type, token] = authorization.split(' ');

    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException('Invalid authorization format');
    }

    try {
      const payload = this.jwtService.verify(token);

      return this.usersService.findById(payload.sub);
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}