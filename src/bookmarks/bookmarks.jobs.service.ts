import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class BookmarksJobsService {
    private readonly logger = new Logger(BookmarksJobsService.name);

    @Cron(CronExpression.EVERY_30_SECONDS)
    //@Cron('45 * * * * *')
    handleCron() {
        this.logger.debug('Called every 30 seconds');
    }
}