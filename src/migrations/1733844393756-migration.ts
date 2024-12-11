import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733844393756 implements MigrationInterface {
    name = 'Migration1733844393756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_e43a190219feebf4fcc15fa749"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_64a1ee61a3c1f456b62f321ed9"`);
        await queryRunner.query(`ALTER TABLE "trains_shedules" RENAME COLUMN "sheduled_date" TO "scheduled_date"`);
        await queryRunner.query(`CREATE INDEX "IDX_5aea3e9321f98f84c67fcd43ca" ON "trains_shedules" ("scheduled_date") `);
        await queryRunner.query(`CREATE INDEX "IDX_ada2f4a7d640a445aa1045b8b3" ON "trains_shedules" ("from", "to", "scheduled_date") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_ada2f4a7d640a445aa1045b8b3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5aea3e9321f98f84c67fcd43ca"`);
        await queryRunner.query(`ALTER TABLE "trains_shedules" RENAME COLUMN "scheduled_date" TO "sheduled_date"`);
        await queryRunner.query(`CREATE INDEX "IDX_64a1ee61a3c1f456b62f321ed9" ON "trains_shedules" ("sheduled_date") `);
        await queryRunner.query(`CREATE INDEX "IDX_e43a190219feebf4fcc15fa749" ON "trains_shedules" ("from", "to", "sheduled_date") `);
    }

}
