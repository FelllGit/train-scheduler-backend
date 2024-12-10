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

@Entity('trains_shedules')
@Index(['from', 'to', 'sheduledDate'])
export class TrainsShedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  from: string;

  @Column()
  @Index()
  to: string;

  @Column()
  sheduledDate: Date;

  @ManyToOne(() => Train, (train) => train.trainsShedules)
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
