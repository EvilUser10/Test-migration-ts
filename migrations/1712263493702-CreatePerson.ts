import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePerson1712263493702 implements MigrationInterface {
    name = 'CreatePerson1712263493702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" integer NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
