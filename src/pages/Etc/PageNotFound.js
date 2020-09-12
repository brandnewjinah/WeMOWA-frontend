import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./etc.scss";

class PageNotFound extends Component {
  goToLink = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="PageNotFound">
        <Header />
        <Nav />
        <div className="pnf flexColumnCenter">
          <h3>404</h3>
          <h2>Something went wrong</h2>
          <div>
            <p>
              So sorry, but the page you’re looking for is currently not
              available. Go back to the homepage or click below to continue
              shopping.
            </p>
          </div>
          <button className="etcBtn" onClick={this.goToLink}>
            Start Shopping
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(PageNotFound);
