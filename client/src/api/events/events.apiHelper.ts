import Axios from "axios";
import { errorLogger } from "../errorLogger";
import {
  EventInterface,
  PatchEvent,
  PostEvent
} from "../../types/event.interfaces";

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
