import {Body, Controller, Delete, Get, Param, Post, Query} from '@nestjs/common';
import {BookmarksService} from "./bookmarks.service";
import {Bookmark} from "./models/bookmark.entity";
import {CreateBookmarkDto} from "./dtos/create-bookmark.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Bookmarks')
@Controller('bookmarks')
export class BookmarksController {
    constructor(private readonly bookmarkService: BookmarksService) {}

    @Post()
    create(@Body() createBookmarkDto: CreateBookmarkDto): Promise<Bookmark> {
        return this.bookmarkService.create(createBookmarkDto);
    }

    @Get()
    findAll(): Promise<Bookmark[]> {
        return this.bookmarkService.findAll();
    }

    @Get('search')
    search(@Query('query') query: string): Promise<Bookmark[]> {
        return this.bookmarkService.search(query);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.bookmarkService.removeById(id);
    }
}
