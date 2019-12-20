import { useState, useEffect } from "react";
import axios from "axios";

const useGetEvent = isChanged => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isChanged) {
      axios.get("http://localhost:3001/events").then(res => {
        setData(res.data);
      });
    }
  }, [isChanged]);
  return data;
};

export default useGetEvent;
