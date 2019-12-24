import { EventInterface } from "../types/event.interfaces";

export const filterEvents = (
  events: EventInterface[],
  id: number
): EventInterface[] => {
  const newEvents: EventInterface[] = events.filter(event => event.id !== id);

  return newEvents;
};
