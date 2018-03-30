import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ButtonAction.less";

class ButtonAction extends Component {
  render() {
    const { to } = this.props;

    return (
      <Link className="ButtonAction" to={to}>
        <div className="ButtonAction-label">{this.props.children}</div>
      </Link>
    );
  }
}

export default ButtonAction;
