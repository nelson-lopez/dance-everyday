import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import Venue from 'src/venue/venue.entity';

@Entity()
/**
 * * Event Model Definition
 */
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column({
    type: 'varchar',
    length: 750,
  })
  description: string;

  @Column()
  date: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(
    type => Venue,
    venue => venue.events,
  )
  venue: number;
}
