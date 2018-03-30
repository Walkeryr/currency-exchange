import * as types from "./types";

import mockAxios from "utils/mockApi";

function fetchListResponse({ list }) {
  return {
    type: types.FETCH_LIST_RESPONSE,
    payload: {
      list
    }
  };
}

export const fetchList = () => {
  return dispatch => {
    mockAxios.get("/api/activity").then(response => {
      dispatch(fetchListResponse({ list: response.data }));
    });
  };
};
