import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import Venue from 'src/venue/venue.entity';

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  date: string;

  @ManyToOne(
    type => Venue,
    venue => venue.events,
  )
  venue: Venue;
}
