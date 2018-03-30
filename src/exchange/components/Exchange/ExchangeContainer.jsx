import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  fetchRates,
  changeFromCurrency,
  changeToCurrency,
  onChangeFromAmount,
  onExchange,
  resetData
} from "exchange/actions";
import Exchange from "./Exchange.jsx";

class ExchangeContainer extends Component {
  onChangeFromCurrency = currencyCode => {
    this.props.dispatch(changeFromCurrency(currencyCode));
  };

  onChangeFromAmount = value => {
    this.props.dispatch(onChangeFromAmount(value));
  };

  onChangeToCurrency = currencyCode => {
    this.props.dispatch(changeToCurrency(currencyCode));
  };

  onExchange = data => {
    this.props.dispatch(onExchange(data)).then(() => {
      this.props.history.push("/");
    });
  };

  setFromCurrency = nextProps => {
    const { fromCurrency, accountCurrency, dispatch } = this.props;

    if (!fromCurrency && nextProps.accountCurrency) {
      dispatch(changeFromCurrency(nextProps.accountCurrency));
    }
  };

  setToCurrency = nextProps => {
    const { toCurrency, dispatch } = this.props;

    if (!toCurrency && nextProps.currencies.length) {
      dispatch(changeToCurrency(nextProps.currencies[0].currencyCode));
    }
  };

  componentDidMount() {
    this.setFromCurrency(this.props);
    this.setToCurrency(this.props);

    this.props.dispatch(fetchRates());
    // this.ratesInterval = setInterval(() => {
    // this.props.dispatch(fetchRates());
    // }, 5 * 60 * 1000);
  }

  componentWillReceiveProps(nextProps) {
    this.setFromCurrency(nextProps);
    this.setToCurrency(nextProps);
  }

  componentWillUnmount() {
    clearInterval(this.ratesInterval);

    this.props.dispatch(resetData());
  }

  render() {
    const {
      currencies,
      activeCurrency,
      fromCurrency,
      fromAmount,
      toAmount,
      toCurrency,
      currencyRate,
      inverseCurrencyRate,
      onExchange
    } = this.props;

    return (
      <div>
        {currencies.length !== 0 &&
          fromCurrency &&
          toCurrency && (
            <Exchange
              currencies={currencies}
              fromCurrency={fromCurrency}
              fromAmount={fromAmount}
              toCurrency={toCurrency}
              toAmount={toAmount}
              currencyRate={currencyRate}
              inverseCurrencyRate={inverseCurrencyRate}
              onChangeFromCurrency={this.onChangeFromCurrency}
              onChangeFromAmount={this.onChangeFromAmount}
              onChangeToCurrency={this.onChangeToCurrency}
              onExchange={this.onExchange}
            />
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currencies: state.account.balance,
    accountCurrency: state.account.activeCurrency,
    fromCurrency: state.exchange.fromCurrency,
    fromAmount: state.exchange.fromAmount,
    toCurrency: state.exchange.toCurrency,
    toAmount: state.exchange.toAmount,
    currencyRate: state.exchange.currencyRate,
    inverseCurrencyRate: state.exchange.inverseCurrencyRate
  };
};

export default connect(mapStateToProps)(withRouter(ExchangeContainer));
