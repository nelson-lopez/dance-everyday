import { eventsApiHelper } from "./events.apiHelper";

const eventsApiPatch = (
  id: number,
  name: string,
  date: string,
  description: string
) => {
  const url = `http://dance-everyday-prod.us-east-1.elasticbeanstalk.com/events/${id}/update`;
  const method = "PATCH";
  /**
   *! Figure out a way to optionally pass eventInfo without TS errors
   */
  let setEventInfo = undefined;
  eventsApiHelper(
    url,
    (setEventInfo = undefined),
    method,
    name,
    date,
    description
  );
};

export default eventsApiPatch;
