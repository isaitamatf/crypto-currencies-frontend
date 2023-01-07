import axios from "axios";
import { API_URL } from '../../services/constants';

export function getCryptos() {
  const options = {
    method: "GET",
    url: `${API_URL}/cryptos`,
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
