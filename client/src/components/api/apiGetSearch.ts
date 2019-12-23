import Axios from "axios";
import { EventInterface } from "../types/event.interfaces";
import { apiHelper } from "./apiHelper";

export const apiGetSearch = async (
  searchTerm: string,
  setEventInfo: (data: EventInterface[]) => void
) => {
  const url = `http://localhost:3001/events?search=${searchTerm}`;

  apiHelper(url, setEventInfo);
};
