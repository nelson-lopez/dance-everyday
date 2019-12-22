import axios from "axios";

const apiDelete = (id: number) => {
  axios
    .delete(`http://localhost:3001/events/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export default apiDelete;
