import axios from "axios";
import { apiHelper } from "./apiHelper";

const apiPatch = (
  id: number,
  name: string,
  date: string,
  description: string
) => {
  const url = `http://localhost:3001/events/${id}/update`;
  const method = "PATCH";
  /**
   *! Figure out a way to optionally pass eventInfo without TS errors
   */
  let setEventInfo = undefined;
  apiHelper(url, (setEventInfo = undefined), method, name, date, description);
};

export default apiPatch;
