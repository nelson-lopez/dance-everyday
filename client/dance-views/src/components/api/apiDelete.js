import axios from 'axios';

const apiDelete = id => {
  axios
    .delete(`http://localhost:9876/api/events/${id}`)
    .then(res => console.log(res));
};

export default apiDelete;
