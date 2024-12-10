import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1733832769021 implements MigrationInterface {
  name = 'Migration1733832769021';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "trains_shedules" ("id" SERIAL NOT NULL, "from" character varying NOT NULL, "to" character varying NOT NULL, "sheduled_date" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "train_id" integer, CONSTRAINT "PK_a0968020139d3c4bbab20ee9e96" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_34e41c5cdb3e316b4d5829f380" ON "trains_shedules" ("from") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_69c7e98670666a897f53f023c8" ON "trains_shedules" ("to") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e43a190219feebf4fcc15fa749" ON "trains_shedules" ("from", "to", "sheduled_date") `,
    );
    await queryRunner.query(
      `CREATE TABLE "trains" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_e4a77c477e29608e7d17d17fb4f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_fb2dab72567ddaeaf35eaf80e1" ON "trains" ("name") `,
    );
    await queryRunner.query(
      `ALTER TABLE "trains_shedules" ADD CONSTRAINT "FK_79e9467475f73238ec68270f1b3" FOREIGN KEY ("train_id") REFERENCES "trains"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "trains_shedules" DROP CONSTRAINT "FK_79e9467475f73238ec68270f1b3"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_fb2dab72567ddaeaf35eaf80e1"`,
    );
    await queryRunner.query(`DROP TABLE "trains"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_e43a190219feebf4fcc15fa749"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_69c7e98670666a897f53f023c8"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_34e41c5cdb3e316b4d5829f380"`,
    );
    await queryRunner.query(`DROP TABLE "trains_shedules"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
