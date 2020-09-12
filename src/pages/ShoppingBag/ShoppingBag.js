import React, { Component } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import "./ShoppingBag.scss";
class ShoppingBag extends Component {
  render() {
    return (
      <div className="ShoppingBag">
        <div className="cartHeader flexColumnCenter"></div>
        <div className="cartMain flexSpaceBetween">
          <div className="cartLeft">
            <div className="cartItem">
              {this.props.data.map((p) => (
                <CartItem
                  key={p.id}
                  product={p}
                  amount={p.amount}
                  handleMinus={this.props.handleMinus}
                  handlePlus={this.props.handlePlus}
                  handleRemove={this.props.handleRemove}
                  handleSubtotal={this.props.handleSubtotal}
                />
              ))}
            </div>
          </div>
          <div className="cartRight">
            <CartTotal cartTotal={this.props.cartTotal} />
          </div>
        </div>
      </div>
    );
  }
}
export default ShoppingBag;
