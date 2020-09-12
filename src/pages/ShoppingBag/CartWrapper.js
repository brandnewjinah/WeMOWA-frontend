import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import CartHeader from "./CartHeader";
import ShoppingBag from "./ShoppingBag";
import EmptyCart from "./EmptyCart";
import "./CartWrapper.scss";
class CartWrapper extends Component {
  state = {
    data: [],
    cartTotal: 0,
    shipping: 0,
    grandTotal: 0,
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
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({ data: res.data });
  //     });
  //   //.then((res) => console.log(res.data));
  //   // fetch("/data/cart.json")
  //   //   .then((res) => res.json())
  //   //   .then((res) => this.setState({ data: res.data }));
  //   this.handleTotal();
  // }

  componentDidMount() {
    fetch("/data/cart.json")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.data }));
    this.handleTotal();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data.length !== this.state.data.length) this.handleTotal();
    else {
      prevState.data.forEach((element, idx) => {
        if (element.amount !== this.state.data[idx].amount) {
          this.handleTotal();
        }
      });
    }
  }
  // API 연동
  getDate = () => {};
  //제품 수량 빼기
  handleMinus = (product) => {
    const token = localStorage.getItem("token");
    const data = [...this.state.data]; //data 배열을 clone 해온다. state 를 직접 업데이트 시키지 않기 위해
    const i = data.indexOf(product); // 각 제품의 index 를 알기 위해
    data[i] = { ...product }; //prouducts[i] 의 객체를 clone 한다음
    if (data[i].amount > 1) {
      data[i].amount--; //clone 된 객체의 수량에 1을 빼준 후
    }
    //  fetch("http://" , {
    //    method: "PATCH",
    //    header: {
    //      "Content-type": "application/json",
    //      "Authorization": token
    //    }
    //     body: JSON.stringify({
    //       "whichproduct": "data[i].number?"
    //       "quantity": "data[i].amount"
    //     })
    //   })
    //   .then(res => console.log(res))
    this.setState({ data }); // 그 값을 testProduct 에 setState 해준다
  };
  //제품 수량 더하기
  handlePlus = (product) => {
    const token = localStorage.getItem("token");
    const data = [...this.state.data];
    const i = data.indexOf(product);
    data[i] = { ...product };
    data[i].amount++; //clone 된 객체의 수량에 1을 더해준 후
    // fetch("http://10.58.2.57:8000/order", {
    //   method: "PATCH",
    //   header: {
    //     "Content-type": "application/json",
    //     Authorization: token,
    //   },
    //   body: JSON.stringify({
    //     amount: data[i].amount,
    //   }),
    // }).then((res) => console.log(res));
    this.setState({ data }); // 그 값을 testProduct 에 setState 해준다
  };
  handleRemove = (product) => {
    const token = localStorage.getItem("token");
    const data = [...this.state.data];
    const newdata = data.filter((p) => p.id !== product.id);
    // fetch("http://10.58.2.57:8000/order", {
    //   method: "DELETE",
    //   header: {
    //     "Content-type": "application/json",
    //     Authorization: token,
    //   },
    //   body: JSON.stringify({
    //     product_id: product.id,
    //   }),
    // }).then((res) => console.log(res));
    this.setState({ data: newdata });
  };
  handleSubtotal = (product) => {
    const amount = product.amount;
    return product.price * amount;
  };
  handleTotal = () => {
    let total = 0;
    this.state.data.map((item) => (total += item.price * item.amount));
    total = total.toFixed(2);
    this.setState({ cartTotal: total });
    //const grandTotal = total + this.state.shipping;
    //const update = () => {
    //  this.setState({ cartTotal: total });
    //};
    //return update;
  };
  render() {
    // console.log(localStorage.getItem("cart"));
    return (
      <div className="CartWrapper">
        <Header />
        <Nav />
        <div className="ctHeader">
          <CartHeader totalNumber={this.state.data.length} />
        </div>
        <main className="ShoppingBag">
          {this.state.data.length === 0 ? (
            <EmptyCart />
          ) : (
            <ShoppingBag
              data={this.state.data}
              handleMinus={this.handleMinus}
              handlePlus={this.handlePlus}
              handleRemove={this.handleRemove}
              handleSubtotal={this.handleSubtotal}
              cartTotal={this.state.cartTotal}
            />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}
export default CartWrapper;
