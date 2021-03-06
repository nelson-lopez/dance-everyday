import Axios from "axios";
import { errorLogger } from "../errorLogger";
import {
  EventInterface,
  PatchEvent,
  PostEvent
} from "../../types/event.interfaces";

/**
 * * With a App that is heavily reliant on CRUD operations I decided to create a helper func
 * * Here we take in optional parameters and return the desired request
 * ! Abstract the setEventInfo hook one layer up so that it doesn't run too deep into our helper function
 */
export const eventsApiHelper = (
  url: string,
  setEventInfo?: (data: EventInterface[]) => void,
  method?: string,
  data?: PatchEvent,
  values?: PostEvent
) => {
  if (method === "GET")
    Axios.get(url)
      .then(res => {
        if (setEventInfo) {
          setEventInfo(res.data);
        }
      })
      .catch(err => {
        errorLogger(err);
      });

  if (method === "PATCH") {
    Axios.patch(url, {
      name: data?.name,
      date: data?.date,
      description: data?.description
    })
      .then(res => console.log(res))
      .catch(err => {
        errorLogger(err);
      });
  }
  if (method === "DELETE") {
    Axios.delete(url)
      .then(res => console.log(res))
      .catch(err => {
        errorLogger(err);
      });
  }
  if (method === "POST") {
    Axios.post(url, {
      name: values?.eventName,
      date: values?.eventDate,
      description: values?.description,
      venueName: values?.venueName
    }).then(res => console.log(res));
  }
};
