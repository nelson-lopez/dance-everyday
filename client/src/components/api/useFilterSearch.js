import { useState, useEffect } from "react";
import Axios from "axios";

export const useFilterSearch = searchTerm => {
  const [data, setData] = useState(null);
  const url = `http://localhost:3001/events?search=${searchTerm}`;

  useEffect(() => {
    if (searchTerm) {
      Axios.get(url).then(res => {
        setData(res.data);
      });
    }
  }, [searchTerm, url]);

  return data;
};
