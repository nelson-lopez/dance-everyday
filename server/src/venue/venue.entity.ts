import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Event } from 'src/event/event.entity';

@Entity()
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

  @Column()
  email: string;

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
