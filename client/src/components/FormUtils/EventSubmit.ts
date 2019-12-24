import { PostEvent } from "../types/event.interfaces";
import Axios from "axios";
import { errorLogger } from "../api/errorLogger";

export const OnEventSubmit = async (values: PostEvent): Promise<void> => {
  const url = `https://cors-anywhere.herokuapp.com/http://dance-everyday-prod.us-east-1.elasticbeanstalk.com/events/create`;
  const data = await Axios.post(url, {
    name: values.name,
    date: values.eventDate,
    description: values.description,
    venueName: values.venueName
  })
    .then(res => console.log(res))
    .catch(err => {
      errorLogger(err);
    });

  return data;
};
