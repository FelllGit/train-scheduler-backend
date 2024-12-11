import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733844436337 implements MigrationInterface {
    name = 'Migration1733844436337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "trains_schedules" ("id" SERIAL NOT NULL, "from" character varying NOT NULL, "to" character varying NOT NULL, "scheduled_date" TIMESTAMP NOT NULL, "arrival_time" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "train_id" integer, CONSTRAINT "PK_7b2e97e67d82e078135d7b7af9c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_95aa3c120b259e89093c1bc85e" ON "trains_schedules" ("from") `);
        await queryRunner.query(`CREATE INDEX "IDX_29fc769edd2097168ebb0c7177" ON "trains_schedules" ("to") `);
        await queryRunner.query(`CREATE INDEX "IDX_a0568d307bd19cd5435d703e28" ON "trains_schedules" ("scheduled_date") `);
        await queryRunner.query(`CREATE INDEX "IDX_e64e0f7c904a87e8f1589de821" ON "trains_schedules" ("from", "to", "scheduled_date") `);
        await queryRunner.query(`ALTER TABLE "trains_schedules" ADD CONSTRAINT "FK_0c6136cbc549d8e0f931942b1bd" FOREIGN KEY ("train_id") REFERENCES "trains"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trains_schedules" DROP CONSTRAINT "FK_0c6136cbc549d8e0f931942b1bd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e64e0f7c904a87e8f1589de821"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a0568d307bd19cd5435d703e28"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_29fc769edd2097168ebb0c7177"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_95aa3c120b259e89093c1bc85e"`);
        await queryRunner.query(`DROP TABLE "trains_schedules"`);
    }

}
