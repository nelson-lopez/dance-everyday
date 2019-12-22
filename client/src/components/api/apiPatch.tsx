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
    .catch(err => console.log(err));
};

export default apiPatch;
