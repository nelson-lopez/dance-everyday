import Axios from "axios";
import { PostData } from "../types/post.interface";

export const postEvent = (data: PostData) => {
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
