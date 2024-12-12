import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733993582150 implements MigrationInterface {
    name = 'Migration1733993582150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_a0568d307bd19cd5435d703e28"`);
        await queryRunner.query(`ALTER TABLE "trains_schedules" DROP COLUMN "arrival_time"`);
        await queryRunner.query(`ALTER TABLE "trains_schedules" ADD "arrival_time" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trains_schedules" DROP COLUMN "arrival_time"`);
        await queryRunner.query(`ALTER TABLE "trains_schedules" ADD "arrival_time" TIMESTAMP NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_a0568d307bd19cd5435d703e28" ON "trains_schedules" ("scheduled_date") `);
    }

}
