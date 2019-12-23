import { EventInterface } from "./event.interfaces";

export interface Venue {
  id: number;
  name: string;
  location: string;
  phone: string;
  createdAt: string;
  events: EventInterface[];
}

export type VenueData = Venue[] | null;
