import axios from "axios";
import { API_URL } from "../../services/constants";

export function postHistory(history) {
  console.log(history);
  /*
  axios
    .post(`${API_URL}/history`, history)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  */ 
}
