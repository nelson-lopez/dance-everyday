import { EventInterface } from "../../types/event.interfaces";
import { apiHelper } from "../apiHelper";

export const eventsApiGet = (
  setEventInfo: (data: EventInterface[]) => void
) => {
  const url: string = "http://localhost:3001/events";
  const method: string = "GET";
  apiHelper(url, setEventInfo, method);
};
