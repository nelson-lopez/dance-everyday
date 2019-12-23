import { apiHelper } from "../apiHelper";

const eventsApiDelete = (id: number) => {
  const url = `http://localhost:3001/events/${id}`;
  const method = `DELETE`;
  const setEventInfo = undefined;

  apiHelper(url, setEventInfo, method);
};

export default eventsApiDelete;
