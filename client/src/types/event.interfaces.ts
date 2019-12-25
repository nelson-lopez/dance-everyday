import { HomeProps } from "./event-methods.interface";

export interface EventInterface {
  name: string;
  description: string;
  date: string;
  venueName: string;
  id: number;
}

export interface EventListProps {
  newEvent?: EventInterface;
  searchInput: string;
  newSearchList: EventInterface[] | null;
  newList?: HomeProps["newList"];
}
/**
 * TODO Expand PostEvent interface after event schema change
 */
export interface PostEvent {
  eventName: string;
  eventDate: string;
  venueName: string;
  description: string;
}

export interface PatchEvent {
  id: number;
  name: string;
  date: string;
  description: string;
}
