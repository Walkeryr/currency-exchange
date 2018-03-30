import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBalance, changeActiveCurrency } from "account/actions";
import { fetchList } from "activity/actions";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchBalance());
    this.props.dispatch(fetchList());
  }

  componentDidUpdate(prevProps, prevState) {
    const { activeCurrency, currencies, dispatch } = this.props;

    if (currencies.length !== 0 && !activeCurrency) {
      let newActiveCurrency = currencies[Math.floor(currencies.length / 2)].currencyCode;

      dispatch(changeActiveCurrency(newActiveCurrency));
    }
  }

  render() {
    return <div className="App">{this.props.children}</div>;
  }
}

const mapStateToProps = state => {
  return {
    currencies: state.account.balance,
    activeCurrency: state.account.activeCurrency
  };
};

export default connect(mapStateToProps)(App);
