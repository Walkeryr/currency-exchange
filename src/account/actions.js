import * as types from "./types";

import mockAxios from "utils/mockApi";

function fetchBalanceResponse({ balance }) {
  return {
    type: types.FETCH_BALANCE_RESPONSE,
    payload: {
      balance
    }
  };
}

export const fetchBalance = () => {
  return dispatch => {
    mockAxios.get("/api/balance").then(response => {
      dispatch(fetchBalanceResponse({ balance: response.data }));
    });
  };
};

export const changeActiveCurrency = currencyCode => {
  return {
    type: types.CHANGE_ACTIVE_CURRENCY,
    payload: {
      currencyCode
    }
  };
};
