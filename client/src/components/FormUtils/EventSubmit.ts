import { PostEvent } from "../types/event.interfaces";
import Axios from "axios";

export const OnEventSubmit = async (values: PostEvent): Promise<void> => {
  const url = `http://localhost:3001/events/create`;
  const data = await Axios.post(url, {
    name: values.name,
    date: values.eventDate,
    description: values.description,
    venueName: values.venueName
  })
    .then(res => console.log(res))
    .catch(err => {
      if (err.response) {
        /**
         * * Server response outside of the range of 2xx
         */
        console.log(err.response.date);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        /**
         * * No response was received so the error sits in the browser
         */
        console.log(err.request);
      } else {
        /**
         * * Error setting up the request
         */
        console.log("Error", err.message);
      }

      console.log(err.config);
    });

  return data;
};
