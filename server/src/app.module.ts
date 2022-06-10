import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';
import { RequestModule } from './request/request.module';
import { PeopleResolver } from './people/people.resolver';
import { GeneralExceptionFilter } from './filters/general-exception.filter';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(__dirname, 'graphql/schema.gql'),
      debug: true,
      playground: true,

    }),
    PeopleModule,
    RequestModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    PeopleResolver,
    {
      provide: APP_FILTER,
      useClass: GeneralExceptionFilter
    }
  ],
})
export class AppModule {}
