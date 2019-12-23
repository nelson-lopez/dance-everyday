import { EventInterface } from "../../types/event.interfaces";
import { eventsApiHelper } from "./events.apiHelper";

export const eventsApiGet = (
  setEventInfo: (data: EventInterface[]) => void
) => {
  const url: string = "http://localhost:3001/events";
  const method: string = "GET";
  eventsApiHelper(url, setEventInfo, method);
};
