import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Event } from '../event/event.entity';

@Entity()
/**
 * * Venue Entity/Model definition
 *
 */
export default class Venue extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    unique: true,
  })
  name: string;
  @Column()
  location: string;
  @Column()
  phone: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(
    type => Event,
    events => events.venue,
    {
      eager: true,
    },
  )
  events: Event[];
}
