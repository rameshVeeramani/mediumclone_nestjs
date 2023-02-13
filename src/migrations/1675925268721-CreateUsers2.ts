import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers21675925268721 implements MigrationInterface {
    name = 'CreateUsers21675925268721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
