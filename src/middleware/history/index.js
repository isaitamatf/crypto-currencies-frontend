import axios from "axios";
import { API_URL } from "../../services/constants";

export function getHistory(sort, currentPage, filter) {
  let params = {
    sort: sort || "date",
    currentPage: currentPage || 0,
    pagination: 4
  };
  if (filter) {
    const { type, fromDate, toDate } = filter;
    params = {
      ...params,
      type,
      fromDate: new Date(fromDate).toISOString(),
      toDate: new Date(toDate).toISOString(),
    };
  }
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

export function postHistory(
  sort,
  setCurrentPage,
  history,
  setHistory,
  setTotal,
  setExchangeSubmitted,
  filter
) {
  axios
    .post(`${API_URL}/history`, history)
    .then((response) => {
      setExchangeSubmitted(true);
      getHistory(sort, 0, filter).then((h) => {
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
