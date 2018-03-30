import React, { Component } from "react";

import { pad } from "utils/numbers";
import CURRENCIES from "utils/currencies";

import "./ActivityItem.less";

class ActivityItem extends Component {
  render() {
    const { title, date, fromAmount, fromCurrency, toAmount, toCurrency } = this.props;

    const dateObj = new Date(date);
    const hours = dateObj.getHours();
    const minutes = pad(dateObj.getMinutes(), 2);
    const time = `${hours}:${minutes}`;

    return (
      <div className="ActivityItem">
        <div className="ActivityItem-type">
          <div className="ActivityItem-icon">→</div>
        </div>
        <div className="ActivityItem-message">
          <div className="ActivityItem-title">{title}</div>
          <div className="ActivityItem-time">{time}</div>
        </div>
        <div className="ActivityItem-amount">
          {toAmount && (
            <div className="ActivityItem-primaryAmount">
              <span className="ActivityItem-amountPrefix">{"+" + CURRENCIES[toCurrency].symbol}</span>
              {Math.abs(toAmount.toFixed(2))}
            </div>
          )}

          {fromAmount && (
            <div className="ActivityItem-secondaryAmount">
              <span className="ActivityItem-amountPrefix">{"-" + CURRENCIES[fromCurrency].symbol}</span>
              {Math.abs(fromAmount.toFixed(2))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ActivityItem;
