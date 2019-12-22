import Axios from "axios";
import { PostEvent } from "../types/event.interfaces";

export const postEvent = (data: PostEvent) => {
  const url = `http://localhost:3001/events/create`;

  if (data) {
    Axios.post(url, {
      name: data.name,
      date: data.eventDate,
      description: data.description,
      venueName: data.venueName
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
};
