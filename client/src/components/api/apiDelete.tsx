import axios from "axios";

const apiDelete = (id: number) => {
  axios
    .delete(`http://localhost:3001/events/${id}`)
    .then(res => console.log(res))
    .catch(err => {
      if (err.response) {
        /**
         * * Server response outside of the range of 2xx
         */
        console.log(err.response.data);
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

export default apiDelete;
