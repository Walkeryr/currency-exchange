import React, { Component } from "react";

import ActivityListContainer from "activity/components/ActivityList/ActivityListContainer.jsx";
import BalanceContainer from "account/components/Balance/BalanceContainer.jsx";

import "./Account.less";

class Account extends Component {
  render() {
    return (
      <div className="Account">
        <div className="Account-balance">
          <BalanceContainer />
        </div>

        <div className="Account-activity">
          <ActivityListContainer />
        </div>
      </div>
    );
  }
}

export default Account;
