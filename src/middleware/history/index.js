import axios from "axios";
import { API_URL } from "../../services/constants";

export function getHistory() {
  const options = {
    method: "GET",
    url: `${API_URL}/history`,
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

export function postHistory(history) {
  axios
    .post(`${API_URL}/history`, history)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
