import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBalance, changeActiveCurrency } from "account/actions";
import Balance from "account/components/Balance/Balance.jsx";

class BalanceContainer extends Component {
  onChangeCurrency = currencyCode => {
    this.props.dispatch(changeActiveCurrency(currencyCode));
  };

  render() {
    const { currencies, activeCurrency } = this.props;

    return <Balance currencies={currencies} activeCurrency={activeCurrency} onChangeCurrency={this.onChangeCurrency} />;
  }
}

const mapStateToProps = state => {
  return {
    currencies: state.account.balance,
    activeCurrency: state.account.activeCurrency
  };
};

export default connect(mapStateToProps)(BalanceContainer);
