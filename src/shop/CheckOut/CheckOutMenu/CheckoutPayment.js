import React, { Component } from "react";
import CreditCard from "./CreditCard";
import "./CheckoutPayment.scss";

class CheckoutPayment extends Component {
  state = { creditCardCheck: false, paypalCheck: false };

  changeCrditBox = () => {
    this.setState({ creditCardCheck: true });
  };

  changePaypalBox = () => {
    this.setState({ paypalCheck: true });
  };

  returnCrditBox = () => {
    this.setState({ creditCardCheck: false, paypalCheck: false });
  };

  render() {
    const { creditCardCheck, paypalCheck } = this.state;
    return (
      <div className="CheckoutPayment">
        <div className="CheckoutPayment-box">
          <h3>How do you want to pay your order?</h3>
          {/* true 일때, box 색이 바뀜 */}
          <div
            className={
              creditCardCheck ? "creditCard-changeBox" : "creditCard-box"
            }
            onClick={this.changeCrditBox}
          >
            <img
              src="https://www.rimowa.com/on/demandware.static/-/Sites/default/dwdab4f393/payment/CreditCard.png"
              alt="CreditCard.png"
            ></img>
            <h4>Credit Card</h4>
          </div>
          <CreditCard
            creditCardCheck={this.state.creditCardCheck}
            return={this.returnCrditBox}
          />
          <div
            className={creditCardCheck ? "changePaypal-box" : "paypal-box"}
            style={{ backgroundColor: paypalCheck ? "#fbfaf9" : "#fff" }}
            onClick={this.changePaypalBox}
          >
            <img
              src="https://www.rimowa.com//on/demandware.static/-/Sites/default/dw5261c638/payment/pp_h_rgb.png"
              alr="pp_h_rgb.png"
            ></img>
            <h4>PAYPAL</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutPayment;
