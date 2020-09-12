import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "./CreditCard.scss";
import "react-toastify/dist/ReactToastify.css";

class CreditCard extends Component {
  state = {
    cardNumber: "",
    cardName: "",
    cardCvv: "",
    cardMM: "",
    cardYY: "",
    cardNumberCheck: false,
    cardNameCheck: false,
    cardCvvCheck: false,
  };

  // 빈값 체크
  cardValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    if (
      e.target.name === "cardNumber" &&
      e.target.value.length > 0 &&
      e.target.value.length < 18
    ) {
      this.setState({ cardNumberCheck: false });
    } else if (e.target.name === "cardNumber" && e.target.value.length <= 0) {
      this.setState({ cardNumberCheck: true });
    }

    if (e.target.name === "cardName" && e.target.value.length > 0) {
      this.setState({ cardNameCheck: false });
    } else if (e.target.name === "cardName" && e.target.value.length <= 0) {
      this.setState({ cardNameCheck: true });
    }

    if (
      e.target.name === "cardCvv" &&
      e.target.value.length >= 0 &&
      e.target.value.length < 3
    ) {
      this.setState({ cardCvvCheck: true });
    } else {
      this.setState({ cardCvvCheck: false });
    }
  };

  cardChecked = (e) => {
    e.preventDefault();
    const { cardNumber, cardName, cardMM, cardYY, cardCvv } = this.state;
    if (
      cardNumber.length === 0 ||
      cardName.length === 0 ||
      cardCvv.length === 0 ||
      cardMM.length === 0 ||
      cardYY.length === 0
    ) {
      this.setState({
        cardNumberCheck: true,
        cardNameCheck: true,
        cardCvvCheck: true,
      });
    } else {
      this.setState({
        cardNumberCheck: false,
        cardNameCheck: false,
        cardCvvCheck: false,
        cardNumber: "",
        cardName: "",
        cardMM: "",
        cardYY: "",
        cardCvv: "",
      });

      const token = localStorage.getItem("token");
      fetch("http://3.34.135.207:8000/order/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          cardCvv: cardCvv,
        }),
      }).then((res) => {
        console.log(res);
        if (res) {
          toast(
            "결제 중 입니다. 잠시만 기달려주세요.",
            { position: "bottom-center" },
            { autoClose: 1500 }
          );
          setTimeout(this.goTosuc, 3500);
        } else {
          toast.error("실패", { position: "bottom-center" });
        }
      });

      //   toast(
      //     "결제 중 입니다. 잠시만 기달려주세요.",
      //     { position: "bottom-center" },
      //     { autoClose: 1500 }
      //   );
      //   setTimeout(this.goTosuc, 4000);
    }
  };

  goTosuc = () => {
    this.props.history.push("/ordersuccess");
  };

  render() {
    const { creditCardCheck } = this.props;
    const {
      cardNumber,
      cardName,
      cardMM,
      cardYY,
      cardCvv,
      cardNumberCheck,
      cardNameCheck,
      cardCvvCheck,
    } = this.state;
    return (
      <div
        className="CreditCard"
        style={{ display: creditCardCheck ? "block" : "none" }}
      >
        <ToastContainer />
        <form onSubmit={this.cardChecked}>
          <div className="credit-back" onClick={this.props.return}>
            <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
            <span>Choose another payment method</span>
          </div>
          <div className="CreditCard-items">
            <h4>Enter your card informations:</h4>
            <div className="card-img">
              <img
                src="https://www.rimowa.com/on/demandware.static/Sites-Rimowa-Site/-/default/dwad397d8e/images/creditcards2/visa.png"
                alt="visa.png"
              ></img>
              <img
                src="https://www.rimowa.com/on/demandware.static/Sites-Rimowa-Site/-/default/dw7d1e7dd9/images/creditcards2/mastercard.png"
                alt="mastercard.png"
              ></img>
              <img
                src="https://www.rimowa.com/on/demandware.static/Sites-Rimowa-Site/-/default/dwc61d67bd/images/creditcards2/amex.png"
                alt="amex.png"
              ></img>
              <span>Accepted cards</span>
            </div>
            <div className="card-input">
              <input
                name="cardNumber"
                className={cardNumberCheck ? "inputChecked " : "null"}
                placeholder="Number*"
                onChange={this.cardValue}
                value={cardNumber}
                maxLength="18"
              />
              <span
                className={cardNumberCheck ? "redText block" : "redText none"}
              >
                Please enter at least 18 characters.
              </span>
              <input
                name="cardName"
                className={cardNameCheck ? "inputChecked " : "null"}
                placeholder="Name on card*"
                onChange={this.cardValue}
                value={cardName}
              />
              <span
                className={cardNameCheck ? "redText block" : "redText none"}
              >
                This filed required.
              </span>
              <div className="card-year">
                <input
                  name="cardMM"
                  className="month"
                  placeholder="MM"
                  onChange={this.cardValue}
                  value={cardMM}
                />
                <input
                  name="cardYY"
                  className="year"
                  placeholder="YY"
                  onChange={this.cardValue}
                  value={cardYY}
                />
                <div className="card-cardCvv">
                  <input
                    name="cardCvv"
                    className={cardCvvCheck ? "inputChecked " : "null"}
                    placeholder="CVV*"
                    onChange={this.cardValue}
                    value={cardCvv}
                  />
                </div>
              </div>
              <span className={cardCvvCheck ? "redText block" : "redText none"}>
                Please enter at least 3 characters.
              </span>
            </div>
          </div>
          <div className="CreditCard-btn">
            <button>
              <span>PLACE ORDER</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreditCard);
