import Axios from "axios";
import { EventInterface } from "../types/event.interfaces";
import { errorLogger } from "./errorLogger";

export const apiHelper = (
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
};
