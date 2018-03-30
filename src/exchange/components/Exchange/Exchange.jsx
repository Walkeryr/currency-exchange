import React, { Component } from "react";

import CURRENCIES from "utils/currencies";
import Button from "common/components/Button/Button.jsx";
import CurrencyRow from "exchange/components/CurrencyRow/CurrencyRow.jsx";

import "./Exchange.less";

class Exchange extends Component {
  onExchange = () => {
    const { fromCurrency, fromAmount, toAmount, toCurrency, onExchange } = this.props;

    onExchange({ fromCurrency, fromAmount, toAmount, toCurrency });
  };

  render() {
    const {
      currencies,
      fromCurrency,
      fromAmount,
      toAmount,
      toCurrency,
      currencyRate,
      inverseCurrencyRate,
      onChangeFromCurrency,
      onChangeFromAmount,
      onChangeToCurrency
    } = this.props;

    const balanceItem = currencies.filter(item => item.currencyCode === fromCurrency)[0];
    const isAmountAvailable = fromAmount <= balanceItem.amount;
    const sameCurrency = fromCurrency === toCurrency;

    return (
      <div className="Exchange">
        <div className="Exchange-from">
          <div className="Exchange-nav">
            <Button to="/">Cancel</Button>
            <div className="Exchange-rate">
              1{CURRENCIES[fromCurrency].symbol} = {currencyRate.toFixed(4)}
              {CURRENCIES[toCurrency].symbol}
            </div>
            <Button disabled={!isAmountAvailable || !fromAmount || sameCurrency} onClick={this.onExchange}>
              Exchange
            </Button>
          </div>
          <div className="Exchange-currencies">
            <CurrencyRow
              type="from"
              currencies={currencies}
              activeCurrency={fromCurrency}
              amountValue={fromAmount}
              isAmountAvailable={isAmountAvailable}
              onChangeCurrency={onChangeFromCurrency}
              onChangeFromAmount={onChangeFromAmount}
            />
          </div>
        </div>
        <div className="Exchange-to">
          <div className="Exchange-currencies">
            <CurrencyRow
              type="to"
              currencies={currencies}
              activeCurrency={toCurrency}
              amountValue={toAmount}
              inverseCurrencyCode={fromCurrency}
              inverseCurrencyRate={inverseCurrencyRate}
              onChangeCurrency={onChangeToCurrency}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Exchange;
