import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./UniqueATC.scss";
import { tagColorMenu } from "../../config";

import { connect } from "react-redux";
import { addTag } from "../../store/cart";

class UniqueATC extends Component {
  state = {
    images: [{ img_url: "" }],
    collection: "Incl.VAT",
    name: "",
    price: 60.0,
  };

  goToShoppingcart = () => {
    const data = this.state;
    this.props.addTag(data);
    this.props.history.push("/shoppingcart");
  };

  render() {
    const { selectedColor, textValue } = this.props;
    const { price, collection } = this.state;
    return (
      <div className="UniqueATC">
        <div className="atcWrappr flexSBCenter">
          <div className="left">
            <div className="atcTotal">{price}</div>
            <div className="atcTaxes">{collection}</div>
          </div>
          <div
            className="right"
            onClick={() => {
              this.setState(
                {
                  images: [{ img_url: tagColorMenu[selectedColor] }],
                  name: textValue,
                },
                this.goToShoppingcart
              );
            }}
          >
            <div className="unATCBtn">DONE</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { addTag })(UniqueATC));
