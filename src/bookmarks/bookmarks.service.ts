import {Injectable, Logger} from '@nestjs/common';
import {Bookmark} from "./models/bookmark.entity";
import {CreateBookmarkDto} from "./dtos/create-bookmark.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {ILike, Repository} from "typeorm";

@Injectable()
export class BookmarksService {
    private readonly logger = new Logger(BookmarksService.name);
    constructor(@InjectRepository(Bookmark) private readonly repository: Repository<Bookmark>) {}

    async findAll(): Promise<Bookmark[]> {
        this.logger.log("Fetch all bookmarks")
        return this.repository.find();
    }

    async search(query: string): Promise<Bookmark[]> {
        return this.repository.find({
            title: ILike(`%${query}%`)
        });

        /*return this.repository.createQueryBuilder()
            .where("LOWER(title) = LOWER(:query)", { query })
            .getMany();*/
    }

    async create(createBookmarkDto: CreateBookmarkDto) : Promise<Bookmark>{
        const bookmark = new Bookmark()
        bookmark.title = createBookmarkDto.title;
        bookmark.url = createBookmarkDto.url;
        bookmark.created_date = new Date()

        return this.repository.save(bookmark);
    }

    async removeById(id: number) {
       await this.repository.delete(id)
    }
}
