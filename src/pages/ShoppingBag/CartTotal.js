import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CartTotal.scss";

class CartTotal extends Component {
  goToLink = () => {
    this.props.history.push("/CheckOut");
  };

  render() {
    return (
      <div className="CartTotal">
        <div className="ctSubtotal flexSpaceBetween">
          <div className="left">Subtotal</div>
          <div className="right">{`${this.props.cartTotal} €`}</div>
        </div>
        <div className="ctShipping flexSpaceBetween">
          <div className="left">Shipping</div>
          <div className="right">Free</div>
        </div>
        <div className="ctEstTotal flexSpaceBetween">
          <div className="left">Estimated Total</div>
          <div className="right">{`${this.props.cartTotal} €`}</div>
        </div>
        <button className="ctCheckoutBtn" onClick={this.goToLink}>
          Checkout
        </button>
        <button className="ctContinueBtn">Continue Shopping</button>
      </div>
    );
  }
}

export default withRouter(CartTotal);
