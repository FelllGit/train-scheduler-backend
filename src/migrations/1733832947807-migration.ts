import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1733832947807 implements MigrationInterface {
  name = 'Migration1733832947807';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "trains_shedules" DROP CONSTRAINT "FK_79e9467475f73238ec68270f1b3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "trains_shedules" ADD CONSTRAINT "FK_79e9467475f73238ec68270f1b3" FOREIGN KEY ("train_id") REFERENCES "trains"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "trains_shedules" DROP CONSTRAINT "FK_79e9467475f73238ec68270f1b3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "trains_shedules" ADD CONSTRAINT "FK_79e9467475f73238ec68270f1b3" FOREIGN KEY ("train_id") REFERENCES "trains"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
