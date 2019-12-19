import axios from "axios";

const apiPut = (id, name, date, description) => {
  axios
    .put(`http://localhost:9876/events/${id}`, {
      name: name,
      date: date,
      description: description
    })
    .then(res => console.log(res))
    .catch(res => console.log(res));
};

export default apiPut;
