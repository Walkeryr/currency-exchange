import * as types from "./types";
import * as exchangeTypes from "exchange/types";

const initialState = {
  balance: [],
  activeCurrency: null
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_BALANCE_RESPONSE:
      return {
        ...state,
        balance: action.payload.balance
      };

    case types.CHANGE_ACTIVE_CURRENCY:
      return {
        ...state,
        activeCurrency: action.payload.currencyCode
      };

    case exchangeTypes.EXCHANGE_RESPONSE:
      const { id, fromAmount, fromCurrency, toAmount, toCurrency, date, title } = action.payload.data;

      let balance = state.balance.map(item => {
        if (item.currencyCode === fromCurrency) {
          return { ...item, amount: item.amount - fromAmount };
        } else if (item.currencyCode === toCurrency) {
          return { ...item, amount: item.amount + toAmount };
        } else {
          return item;
        }
      });

      return {
        ...state,
        balance
      };

    default:
      return state;
  }
};

export default reducer;
