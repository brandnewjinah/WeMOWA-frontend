import React, { Component } from "react";
import "./CartHeader.scss";

class CartHeader extends Component {
  state = {};
  render() {
    return (
      <div className="CartHeader flexColumnCenter">
        <span className="subHeader">
          Your Shopping Bag ({this.props.totalNumber})
        </span>
      </div>
    );
  }
}

export default CartHeader;
