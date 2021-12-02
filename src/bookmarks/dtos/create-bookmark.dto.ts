import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateBookmarkDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    url: string;
}