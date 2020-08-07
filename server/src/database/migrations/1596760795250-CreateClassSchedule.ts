import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClassSchedule1596760795250
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'class_schedules',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'week_day',
            type: 'int',
          },
          {
            name: 'from',
            type: 'int',
          },
          {
            name: 'to',
            type: 'int',
          },
          {
            name: 'class_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'SchedulesClass',
            referencedTableName: 'classes',
            referencedColumnNames: ['id'],
            columnNames: ['class_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('class_schedules');
  }
}
