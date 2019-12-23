import { EventInterface } from "../../types/event.interfaces";
import { eventsApiHelper } from "./events.apiHelper";

export const eventsApiGetSearch = async (
  searchTerm: string,
  setEventInfo: (data: EventInterface[]) => void
) => {
  const url = `http://localhost:3001/events?search=${searchTerm}`;

  eventsApiHelper(url, setEventInfo);
};
