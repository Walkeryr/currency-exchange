import React, { Component } from "react";

import CURRENCIES from "utils/currencies";

import "./CurrencyItem.less";

class CurrencyItem extends Component {
  onChangeFromAmount = e => {
    let value = e.currentTarget.value;

    let numberValue = 0;
    if (value !== "") {
      numberValue = Number(value);
    }

    if (!isNaN(numberValue)) {
      this.props.onChangeFromAmount(numberValue);
    }
  };

  render() {
    const {
      currencyCode,
      inverseCurrencyCode,
      inverseCurrencyRate,
      balanceAmount,
      type,
      focused,
      amountValue,
      isAmountAvailable
    } = this.props;

    let inputContentWidth = 0;
    if (this.input) {
      // TODO: Measure content width in virtual element
      inputContentWidth = this.input.value.length * 26;
    }

    return (
      <div className={`CurrencyItem ${!isAmountAvailable && "CurrencyItem--amountNotAvailable"}`}>
        <div className="CurrencyItem-left">
          <div className="CurrencyItem-code">{currencyCode}</div>
          <div className="CurrencyItem-balance">
            You have <span className="CurrencyItem-currencySymbol">{CURRENCIES[currencyCode].symbol}</span>
            {balanceAmount.toFixed(2)}
          </div>
        </div>

        <div className="CurrencyItem-right">
          {type === "from" ? (
            <div className="CurrencyItem-inputWrapper">
              {amountValue ? (
                <span className="CurrencyItem-sign" style={{ right: inputContentWidth }}>
                  -
                </span>
              ) : (
                ""
              )}
              <input
                className="CurrencyItem-input"
                type="text"
                name="amount"
                onChange={this.onChangeFromAmount}
                value={amountValue !== 0 ? amountValue : ""}
                autoFocus={focused}
                ref={node => (this.input = node)}
              />
            </div>
          ) : (
            <div className="CurrencyItem-toValue">{amountValue !== 0 && `+${amountValue.toFixed(2)}`}</div>
          )}

          {type === "to" && (
            <div className="CurrencyItem-inverseRate">
              {CURRENCIES[currencyCode].symbol}1 = {CURRENCIES[inverseCurrencyCode].symbol}
              {inverseCurrencyRate.toFixed(2)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CurrencyItem;
