import { PostEvent } from "../types/event.interfaces";
import Axios from "axios";

export const OnEventSubmit = async (values: PostEvent): Promise<void> => {
  const url = `http://localhost:3001/events/create`;
  const res = await Axios.post(url, {
    name: values.name,
    date: values.eventDate,
    description: values.description,
    venueName: values.venueName
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));

  return res;
};
