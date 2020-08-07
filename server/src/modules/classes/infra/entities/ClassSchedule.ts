import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Class from './Class';

@Entity('class_schedules')
class ClassSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  week_day: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column('uuid')
  class_id: string;

  @ManyToOne(() => Class)
  @JoinColumn({ name: 'class_id' })
  class: Class;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ClassSchedule;
