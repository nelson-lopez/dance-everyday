import { PostEvent } from "../types/event.interfaces";
import { eventsApiHelper } from "../api/events/events.apiHelper";

export const OnEventSubmit = async (values: PostEvent): Promise<void> => {
  const url = `http://localhost:3001/events/create`;
  const method = "POST";

  const response = eventsApiHelper(url, undefined, method, undefined, values);

  console.log(response);

  return response;
};
