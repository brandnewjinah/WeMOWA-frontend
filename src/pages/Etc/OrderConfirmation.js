import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./etc.scss";

class OrderConfirmation extends Component {
  goToLink = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="PageNotFound">
        <Header />
        <Nav />
        <div className="pnf flexColumnCenter">
          <h3>Thank you</h3>
          <h2>We've received your order</h2>
          <div>
            <p>
              We are getting started on your order right away, and you'll
              receive an order confirmation email shortly.
            </p>
          </div>
          <div className="ocDetails"></div>
          <button className="etcBtn" onClick={this.goToLink}>
            Start Shopping
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(OrderConfirmation);
