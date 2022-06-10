import { join } from 'path';
import { Controller, Get,Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(@Response() res) {
    res.sendFile(join(__dirname, '../public/index.html'));
  }
}
