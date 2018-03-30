import React, { Component } from "react";

import CURRENCIES from "utils/currencies";

import "./BalanceItem.less";

class BalanceItem extends Component {
  render() {
    const { currencyCode, amount } = this.props;

    return (
      <div className="BalanceItem">
        <span className="BalanceItem-currencySymbol">{CURRENCIES[currencyCode].symbol}</span>
        <span className="BalanceItem-amount">{amount.toFixed(2)}</span>
      </div>
    );
  }
}

export default BalanceItem;
