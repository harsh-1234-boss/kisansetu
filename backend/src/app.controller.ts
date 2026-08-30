import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHealth() {
    return {
      success: true,
      message: 'KisanSetu Backend is running 🚀',
    };
  }
}