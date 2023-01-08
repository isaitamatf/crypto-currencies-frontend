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

export function postHistory(history, setHistory, setExchangeSubmitted) {
  axios
    .post(`${API_URL}/history`, history)
    .then((response) => {
      setExchangeSubmitted(true);
      getHistory().then((h) => {
        setHistory(h);
      });
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
