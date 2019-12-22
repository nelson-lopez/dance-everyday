import Axios from "axios";
import { EventInterface } from "../types/event.interfaces";

export const apiGet = (setEventInfo: (data: EventInterface[]) => void) => {
  Axios.get("http://localhost:3001/events")
    .then(res => {
      setEventInfo(res.data);
    })
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
};
