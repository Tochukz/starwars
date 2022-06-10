import { Module } from '@nestjs/common';
import { RequestModule } from 'src/request/request.module';
import { PeopleResolver } from './people.resolver';
import { PeopleService } from './people.service';

@Module({
  providers: [
    PeopleService,
    PeopleResolver,
  ],
  imports: [
    RequestModule,
  ],
  exports: [
    PeopleService
  ]
})
export class PeopleModule {}
