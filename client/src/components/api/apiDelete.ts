import { apiHelper } from "./apiHelper";

const apiDelete = (id: number) => {
  const url = `http://localhost:3001/events/${id}`;
  const method = `DELETE`;
  const setEventInfo = undefined;

  apiHelper(url, setEventInfo, method);
};

export default apiDelete;
