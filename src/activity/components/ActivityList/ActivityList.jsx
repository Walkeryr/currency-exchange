import React, { Component } from "react";

import ActivityItem from "activity/components/ActivityItem/ActivityItem.jsx";

import "./ActivityList.less";

class ActivityList extends Component {
  render() {
    const { list } = this.props;

    return (
      <div className="ActivityList">
        {list.length !== 0 &&
          list.map(item => {
            return (
              <ActivityItem
                key={item.id}
                title={item.title}
                date={item.date}
                fromAmount={item.fromAmount}
                fromCurrency={item.fromCurrency}
                toAmount={item.toAmount}
                toCurrency={item.toCurrency}
              />
            );
          })}
      </div>
    );
  }
}

export default ActivityList;
