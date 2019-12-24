import Axios from "axios";
import { Venue } from "../../types/venue.interfaces";

export const venueApiHelper = (
  url: string,
  method: string,
  setVenueInfo: (data: Venue[]) => void
) => {
  if (method === "GET") {
    Axios.get(url).then(res => {
      setVenueInfo(res.data);
    });
  }
};
