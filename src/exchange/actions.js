import axios from "axios";
import mockAxios from "utils/mockApi";

import * as types from "./types";
import { OPEN_EXCHANGE_API_URL, OPEN_EXCHANGE_RATES_APP_ID } from "config";

function fetchRatesResponse({ rates }) {
  return {
    type: types.FETCH_RATES_RESPONSE,
    payload: {
      rates
    }
  };
}

export const fetchRates = () => {
  return (dispatch, getState) => {
    const fromCurrency = getState().exchange.fromCurrency;

    axios.get(`${OPEN_EXCHANGE_API_URL}${OPEN_EXCHANGE_RATES_APP_ID}`).then(response => {
      dispatch(fetchRatesResponse({ rates: response.data.rates }));
    });
  };
};

export function changeFromCurrency(fromCurrency) {
  return {
    type: types.CHANGE_FROM_CURRENCY,
    payload: {
      fromCurrency
    }
  };
}

export function onChangeFromAmount(fromAmount) {
  return {
    type: types.CHANGE_FROM_AMOUNT,
    payload: {
      fromAmount
    }
  };
}

export function resetData() {
  return {
    type: types.RESET_DATA
  };
}

export function changeToCurrency(toCurrency) {
  return {
    type: types.CHANGE_TO_CURRENCY,
    payload: {
      toCurrency
    }
  };
}

function onExchangeResponse({ data }) {
  return {
    type: types.EXCHANGE_RESPONSE,
    payload: {
      data
    }
  };
}

export const onExchange = data => {
  return dispatch => {
    return mockAxios.post("/api/exchange", data).then(response => {
      return dispatch(onExchangeResponse({ data: response.data }));
    });
  };
};
