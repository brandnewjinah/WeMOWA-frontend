import React, { Component } from "react";
import "./CheckOutDelivery.scss";

class CheckOutDelivery extends Component {
  state = {};

  render() {
    const { stepTwoChecked } = this.props;
    return (
      <div className="CheckOutDelivery">
        <div className="deliveryOptions">
          <h2>Select a delivery method</h2>
          <span>
            Your delivery address is currently in France. <a>Change</a>
          </span>
          <div className="shippingFee">
            <div className="shippingFeeBox">
              <div className="shippingFeeBox-text1">
                <p>Standard Fance:</p>
                <p>0,00€</p>
              </div>

              <div className="shippingFeeBox-text2">
                <span className="text2-title">
                  Expected delivery : 2-3 workdays
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="deliveryBtn" onClick={stepTwoChecked}>
          <button>
            <span>NEXT STEP</span>
          </button>
        </div>
      </div>
    );
  }
}

export default CheckOutDelivery;
