import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Button.less";

class Button extends Component {
  render() {
    const { to, disabled, onClick } = this.props;

    let ButtonElement;

    if (to) {
      ButtonElement = Link;
    } else {
      ButtonElement = "button";
    }

    return (
      <ButtonElement className="Button" to={to} disabled={disabled} onClick={onClick}>
        {this.props.children}
      </ButtonElement>
    );
  }
}

export default Button;
