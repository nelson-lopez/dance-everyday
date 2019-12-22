import axios from "axios";

const apiPut = (
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
    .catch(res => console.log(res));
};

export default apiPut;
