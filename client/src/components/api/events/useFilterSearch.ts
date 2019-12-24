import { useState, useEffect } from "react";
import Axios from "axios";
import { errorLogger } from "../errorLogger";
import { inputValidation } from "../../utils/inputValidation";

/**
 *
 * !Potentially a useless hook Refactor/Get rid of it
 */
export const useFilterSearch = (searchTerm: string) => {
  const [data, setData] = useState(null);
  const url = `http://localhost:3001/events?search=${searchTerm}`;
  const minLength: number = 2;

  useEffect(() => {
    if (inputValidation(searchTerm, minLength)) {
      Axios.get(url)
        .then(res => {
          setData(res.data);
        })
        .catch(err => {
          errorLogger(err);
        });
    }
  }, [searchTerm, url]);

  return data;
};
