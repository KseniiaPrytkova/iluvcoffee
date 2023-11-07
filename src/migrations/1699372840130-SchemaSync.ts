import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaSync1699372840130 implements MigrationInterface {
    name = 'SchemaSync1699372840130'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
    }

}
