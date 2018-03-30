import reduceReducers from "reduce-reducers";

import * as types from "./types";

const initialState = {
  rates: {},

  currencyRate: 0,
  fromCurrency: null,
  fromAmount: 0,

  inverseCurrencyRate: 0,
  toCurrency: null,
  toAmount: 0
};

const exchangeHelper = (rates, fromAmount, fromCurrency, toCurrency) => {
  if (Object.keys(rates).length && fromCurrency && toCurrency) {
    let amountInUSD = fromAmount / rates[fromCurrency];
    return amountInUSD * rates[toCurrency];
  } else {
    return 0;
  }
};

const exchange = function(state = initialState, action) {
  let toAmount;
  let currencyRate;
  let inverseCurrencyRate;

  switch (action.type) {
    case types.FETCH_RATES_RESPONSE:
      currencyRate = exchangeHelper(action.payload.rates, 1, state.fromCurrency, state.toCurrency);
      toAmount = state.fromAmount * currencyRate;
      inverseCurrencyRate = exchangeHelper(action.payload.rates, 1, state.toCurrency, state.fromCurrency);

      return {
        ...state,
        rates: action.payload.rates,
        toAmount,
        currencyRate,
        inverseCurrencyRate
      };

    case types.CHANGE_FROM_CURRENCY:
      currencyRate = exchangeHelper(state.rates, 1, action.payload.fromCurrency, state.toCurrency);
      toAmount = state.fromAmount * currencyRate;
      inverseCurrencyRate = exchangeHelper(state.rates, 1, state.toCurrency, action.payload.fromCurrency);

      return {
        ...state,
        fromCurrency: action.payload.fromCurrency,
        toAmount,
        currencyRate,
        inverseCurrencyRate
      };

    case types.CHANGE_FROM_AMOUNT:
      currencyRate = exchangeHelper(state.rates, 1, state.fromCurrency, state.toCurrency);
      toAmount = action.payload.fromAmount * currencyRate;

      return {
        ...state,
        fromAmount: action.payload.fromAmount,
        toAmount
      };

    case types.CHANGE_TO_CURRENCY:
      currencyRate = exchangeHelper(state.rates, 1, state.fromCurrency, action.payload.toCurrency);
      toAmount = state.fromAmount * currencyRate;
      inverseCurrencyRate = exchangeHelper(state.rates, 1, action.payload.toCurrency, state.fromCurrency);

      return {
        ...state,
        toCurrency: action.payload.toCurrency,
        toAmount,
        currencyRate,
        inverseCurrencyRate
      };

    case types.RESET_DATA:
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default exchange;
