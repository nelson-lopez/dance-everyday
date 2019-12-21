import { useEffect } from "react";
import Axios from "axios";

export const usePostEvent = data => {
  const url = `http://localhost:3001/events`;
  useEffect(() => {
    if (data) {
      Axios.post(url)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }, [data, url]);
};
