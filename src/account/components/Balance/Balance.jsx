import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

import ButtonAction from "common/components/ButtonAction/ButtonAction.jsx";
import BalanceItem from "account/components/BalanceItem/BalanceItem.jsx";

import "./Balance.less";

class Balance extends Component {
  // Triggered twice because of changing selectedItem prop of Carousel
  // As discussed here: https://github.com/leandrowd/react-responsive-carousel/issues/155
  onChangeCurrency = index => {
    const { onChangeCurrency, currencies } = this.props;

    onChangeCurrency(currencies[index].currencyCode);
  };

  render() {
    const { currencies, activeCurrency } = this.props;

    let selectedItem = 0;
    selectedItem = currencies.findIndex(item => item.currencyCode === activeCurrency);

    return (
      <div className="Balance">
        <div className="Balance-amounts">
          {currencies.length !== 0 &&
            activeCurrency && (
              <Carousel
                className="Balance-carousel"
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                emulateTouch={true}
                onChange={this.onChangeCurrency}
                selectedItem={selectedItem}>
                {currencies.map(item => {
                  return <BalanceItem key={item.currencyCode} currencyCode={item.currencyCode} amount={item.amount} />;
                })}
              </Carousel>
            )}
        </div>

        <div className="Balance-controls">
          <ButtonAction to="/exchange" icon="exchange">
            Exchange
          </ButtonAction>
        </div>
      </div>
    );
  }
}

export default Balance;
