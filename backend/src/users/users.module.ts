import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),

    JwtModule.register({
      secret: process.env.JWT_SECRET || 'kishansetu-secret-key',
    }),
  ],

  controllers: [UsersController],

  providers: [UsersService],

  exports: [UsersService],
})
export class UsersModule {}