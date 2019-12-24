import { EventInterface } from "../../types/event.interfaces";
import { eventsApiHelper } from "./events.apiHelper";

export const eventsApiGetSearch = async (
  searchTerm: string,
  setEventInfo: (data: EventInterface[]) => void
) => {
  const url = `https://cors-anywhere.herokuapp.com/http://dance-everyday-prod.us-east-1.elasticbeanstalk.com/events?search=${searchTerm}`;

  eventsApiHelper(url, setEventInfo);
};
