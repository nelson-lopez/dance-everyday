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
  name: string;
  eventDate: string;
  venueName: string;
  description: string;
}
