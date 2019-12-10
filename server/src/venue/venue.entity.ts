import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Event } from 'src/event/event.entity';

@Entity()
export default class Venue extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  location: string;
  @Column()
  contact: string;

  @OneToMany(
    type => Event,
    events => events.venue,
    {
      eager: true,
    },
  )
  events: Event[];
}
