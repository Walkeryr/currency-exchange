import React, { Component } from "react";
import { connect } from "react-redux";

import ActivityList from "./ActivityList.jsx";

class ActivityListContainer extends Component {
  render() {
    const { list } = this.props;

    return <ActivityList list={list} />;
  }
}

const mapStateToProps = state => {
  return {
    list: state.activity.list
  };
};

export default connect(mapStateToProps)(ActivityListContainer);
