import axios from "axios";

const apiDelete = (id: number) => {
  axios
    .delete(`http://localhost:3001/events/${id}`)
    .then(res => console.log(res))
    .catch(err => {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
      console.log(err.config);
    });
};

export default apiDelete;
