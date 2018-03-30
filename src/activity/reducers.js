import * as types from "./types";
import * as exchangeTypes from "exchange/types";

const initialState = {
  list: []
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LIST_RESPONSE:
      return {
        ...state,
        list: action.payload.list
      };

    case exchangeTypes.EXCHANGE_RESPONSE:
      const { id, fromAmount, fromCurrency, toAmount, toCurrency, date, title } = action.payload.data;

      return {
        ...state,
        list: [{ id, fromAmount, fromCurrency, toAmount, toCurrency, date, title }, ...state.list]
      };

    default:
      return state;
  }
};

export default reducer;
