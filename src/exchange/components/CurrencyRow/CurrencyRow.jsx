import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

import CurrencyItem from "exchange/components/CurrencyItem/CurrencyItem.jsx";

import "./CurrencyRow.less";

class CurrencyRow extends Component {
  onChangeCurrency = index => {
    const { onChangeCurrency, currencies, type } = this.props;

    onChangeCurrency(currencies[index].currencyCode);
  };

  render() {
    const {
      currencies,
      activeCurrency,
      type,
      amountValue,
      inverseCurrencyCode,
      inverseCurrencyRate,
      isAmountAvailable,
      onChangeFromAmount
    } = this.props;

    let selectedItem = 0;
    selectedItem = currencies.findIndex(item => item.currencyCode === activeCurrency);

    return (
      <div className="CurrencyRow">
        <Carousel
          className="CurrencyRow-carousel"
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          emulateTouch={true}
          infiniteLoop={true}
          onChange={this.onChangeCurrency}
          selectedItem={selectedItem}>
          {currencies.map((item, index) => {
            return (
              <CurrencyItem
                type={type}
                key={item.currencyCode}
                inverseCurrencyCode={inverseCurrencyCode}
                currencyCode={item.currencyCode}
                balanceAmount={item.amount}
                amountValue={amountValue}
                isAmountAvailable={isAmountAvailable}
                inverseCurrencyRate={inverseCurrencyRate}
                focused={index === selectedItem && type === "from" ? true : false}
                onChangeFromAmount={onChangeFromAmount}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default CurrencyRow;
