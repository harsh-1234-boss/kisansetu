import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { Otp, OtpSchema } from './otp.schema';

import { User, UserSchema } from '../users/user.schema';

@Module({
  imports: [
    // MongoDB schemas
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Otp.name,
        schema: OtpSchema,
      },
    ]),

    // Passport
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),

    // JWT
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'kisansetu-secret-key',
      signOptions: {
        expiresIn: '7d',
      },
    }),
  ],

  controllers: [AuthController],

  providers: [
    AuthService,
    JwtStrategy,
  ],

  exports: [
    AuthService,
    JwtModule,
    PassportModule,
  ],
})
export class AuthModule {}