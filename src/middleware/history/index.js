import axios from "axios";
import { API_URL } from "../../services/constants";

export function getHistory(sort, currentPage, filter) {
  const params = {
    sort: sort || "date",
    currentPage: currentPage || 0,
    pagination: 4,
    type: filter.type,
    fromDate: filter.fromDate,
    toDate: filter.toDate
  };
  const options = {
    method: "GET",
    url: `${API_URL}/history`,
    params: {
      ...params,
      output: "JSON"
    },
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

export function postHistory(sort, setCurrentPage, history, setHistory, setTotal, setExchangeSubmitted) {
  axios
    .post(`${API_URL}/history`, history)
    .then((response) => {
      setExchangeSubmitted(true);
      getHistory(sort, 0).then((h) => {
        setHistory(h.result);
        setTotal(h.total);
        setCurrentPage(0);
      });
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
