import { eventsApiHelper } from "./events.apiHelper";

const eventsApiDelete = (id: number) => {
  const url = `https://cors-anywhere.herokuapp.com/http://dance-everyday-prod.us-east-1.elasticbeanstalk.com/events/${id}`;
  const method = `DELETE`;
  const setEventInfo = undefined;

  eventsApiHelper(url, setEventInfo, method);
};

export default eventsApiDelete;
