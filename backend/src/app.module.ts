import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProcurementModule } from './procurement/procurement.module';

@Module({
  imports: [
    // Environment variables
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // MongoDB Atlas
    MongooseModule.forRoot(process.env.MONGODB_URI!),

    // Application modules
    AuthModule,
    UsersModule,
    ProcurementModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}