import axios from "axios";

const apiPatch = (
  id: number,
  name: string,
  date: string,
  description: string
) => {
  axios
    .patch(`http://localhost:3001/events/${id}/update`, {
      name: name,
      date: date,
      description: description
    })
    .then(res => console.log(res))
    .catch(err => {
      if (err.response) {
        /**
         * * Server response outside of the range of 2xx
         */
        console.log(err.response.date);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        /**
         * * No response was received so the error sits in the browser
         */
        console.log(err.request);
      } else {
        /**
         * * Error setting up the request
         */
        console.log("Error", err.message);
      }

      console.log(err.config);
    });
};

export default apiPatch;
