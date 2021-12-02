import { Module } from '@nestjs/common';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import {DatabaseModule} from "./database.module";
import {ScheduleModule} from "@nestjs/schedule";
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ['.env']
      }),
      ScheduleModule.forRoot(),
      DatabaseModule,
      BookmarksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
