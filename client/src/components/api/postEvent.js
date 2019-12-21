import Axios from "axios";

export const postEvent = data => {
  const url = `http://localhost:3001/events/create`;

  if (data) {
    Axios.post(url, {
      name: data.name,
      date: data.eventDate,
      description: data.description,
      venueName: data.venueName
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
};
