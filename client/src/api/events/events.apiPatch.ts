import { eventsApiHelper } from "./events.apiHelper";
import { PatchEvent } from "../../types/event.interfaces";

const eventsApiPatch = (data: PatchEvent) => {
  const url = `http://localhost:3001/events/${data.id}/update`;
  const method = "PATCH";

  eventsApiHelper(url, undefined, method, data);
};

export default eventsApiPatch;
