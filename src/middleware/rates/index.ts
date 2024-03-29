import axios from "axios";
import { API_URL } from "../../constants";

export function getRates() {
  const options = {
    method: "GET",
    url: `${API_URL}/rates`,
    params: { output: "JSON" },
  };
  return axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}
