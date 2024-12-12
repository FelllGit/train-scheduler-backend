import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733843640210 implements MigrationInterface {
    name = 'Migration1733843640210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "IDX_64a1ee61a3c1f456b62f321ed9" ON "trains_shedules" ("sheduled_date") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_64a1ee61a3c1f456b62f321ed9"`);
    }

}
