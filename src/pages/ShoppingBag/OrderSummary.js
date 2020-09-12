import React, { Component } from "react";
import OrderItem from "./OrderItem";
import "./OrderSumm.scss";

class OrderSumm extends Component {
  state = {
    data: [],
    shipping: 0,
  };

  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   fetch("http://10.58.2.57:8000/order", {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json",
  //       Authorization: token,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ data: res.data }));
  // }

  componentDidMount() {
    fetch("/data/cart.json")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.data }));
    this.handleTotal();
  }

  handleTotal = () => {
    let total = 0;
    this.state.data.map((item) => (total += item.price * item.amount));
    return total;
  };

  render() {
    const { shipping } = this.state;
    return (
      <div className="OrderSumm">
        <div className="osHeader">
          <h2>Order Summary</h2>
        </div>
        <div className="osLists">
          {this.state.data.map((item) => (
            <OrderItem key={item.id} product={item} amount={item.amount} />
          ))}
        </div>
        <div className="osCal">
          <div className="osSubtotal flexSpaceBetween">
            <div className="label">Subtotal</div>
            <div className="amount">{this.handleTotal()} €</div>
          </div>
          <div className="osSubtotal flexSpaceBetween">
            <div className="label">Shipping</div>
            <div className="amount">Free</div>
          </div>
          <div className="osTotal flexSpaceBetween">
            <div className="label">Total</div>
            <div className="amount">{this.handleTotal()} €</div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderSumm;
