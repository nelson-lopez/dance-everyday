import axios from 'axios';

const apiPut = (id, name, date, description) => {
  axios
    .put(`http://localhost:9876/api/events/${id}`, {
      name: name,
      date: date,
      discription: description
    })
    .then(res => console.log(res))
    .catch(res => console.log(res));
};

export default apiPut;
