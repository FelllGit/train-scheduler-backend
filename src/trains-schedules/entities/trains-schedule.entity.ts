import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Train } from '../../trains/entities/train.entity';

@Entity('trains_schedules')
@Index(['from', 'to', 'scheduledDate'])
export class TrainsSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  from: string;

  @Column()
  @Index()
  to: string;

  @Column()
  scheduledDate: Date;

  @Column()
  arrivalTime: string;

  @ManyToOne(() => Train, (train) => train.trainsSchedules, {
    onDelete: 'CASCADE', // Каскадне видалення
  })
  @JoinColumn({ name: 'train_id' })
  train: Train;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
