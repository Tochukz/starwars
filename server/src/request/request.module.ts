import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RequestService } from './request.service';

@Module({
  providers: [
    RequestService
  ],
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get('STARWARS_API')
      }),
      inject: [ConfigService]
    })
  ],
  exports: [
    RequestService
  ]
})
export class RequestModule {}
