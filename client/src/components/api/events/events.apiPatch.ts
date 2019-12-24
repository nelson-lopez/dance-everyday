import { eventsApiHelper } from "./events.apiHelper";
import { PatchEvent } from "../../types/event.interfaces";

const eventsApiPatch = (data: PatchEvent) => {
  const url = `http://localhost:3001/events/${data.id}/update`;
  const method = "PATCH";
  /**
   *! Figure out a way to optionally pass eventInfo without TS errors
   */
  let setEventInfo = undefined;
  eventsApiHelper(url, setEventInfo, method, data);
};

export default eventsApiPatch;
