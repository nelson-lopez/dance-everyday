import Axios from "axios";
import { errorLogger } from "../errorLogger";
import { EventInterface } from "../../types/event.interfaces";

export const eventsApiHelper = (
  url: string,
  setEventInfo?: (data: EventInterface[]) => void,
  method?: string,
  name?: string,
  date?: string,
  description?: string
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
      name: name,
      date: date,
      description: description
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
};
