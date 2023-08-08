import axios from "axios";
import { API_URL } from "../../constants";

export function getCurrencies() {
  const options = {
    method: "GET",
    url: `${API_URL}/currencies`,
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
