import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialSchema1638421124585 implements MigrationInterface {
    name = 'InitialSchema1638421124585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bookmark" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "url" character varying NOT NULL, "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_b7fbf4a865ba38a590bb9239814" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "bookmark"`);
    }

}
