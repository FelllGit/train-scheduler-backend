import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733842146549 implements MigrationInterface {
    name = 'Migration1733842146549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trains_shedules" ADD "arrival_time" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trains_shedules" DROP COLUMN "arrival_time"`);
    }

}
