import { Module } from '@nestjs/common';
import { BookmarksController } from './bookmarks.controller';
import { BookmarksService } from './bookmarks.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Bookmark} from "./models/bookmark.entity";
import {BookmarksJobsService} from "./bookmarks.jobs.service";

@Module({
  imports:[TypeOrmModule.forFeature([Bookmark])],
  controllers: [BookmarksController],
  providers: [BookmarksService, BookmarksJobsService]
})
export class BookmarksModule {}
