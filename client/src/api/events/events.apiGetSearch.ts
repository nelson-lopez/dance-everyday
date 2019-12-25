import { eventsApiHelper } from "./events.apiHelper";
import { EventInterface } from "../../types/event.interfaces";

export const eventsApiGetSearch = async (
  searchTerm: string,
  setEventInfo: (data: EventInterface[]) => void
) => {
  const url = `http://localhost:3001/events?search=${searchTerm}`;

  eventsApiHelper(url, setEventInfo);
};
