import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./EmptyCart.scss";

class EmptyCart extends Component {
  goToLink = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="EmptyCart flexColumnCenter">
        <span className="ecHeader">You haven't added anything yet</span>
        <button className="ecBtn" onClick={this.goToLink}>
          Start Shopping
        </button>
      </div>
    );
  }
}

export default withRouter(EmptyCart);
