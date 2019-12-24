import { EventInterface } from "../../types/event.interfaces";
import { eventsApiHelper } from "./events.apiHelper";

export const eventsApiGet = (
  setEventInfo: (data: EventInterface[]) => void
) => {
  const url: string =
    "https://cors-anywhere.herokuapp.com/http://dance-everyday-prod.us-east-1.elasticbeanstalk.com/events";
  const method: string = "GET";
  eventsApiHelper(url, setEventInfo, method);
};
