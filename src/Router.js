import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AccList from "./pages/Accessories/AccList";
import ProductList from "./pages/Luggage/ProductList";
import Login from "./user/Login/Login";
import Signup from "./user/SignUp/SignUp";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductDetailH from "./pages/ProductDetail/ProductDetailH";
import CartWrapper from "./pages/ShoppingBag/CartWrapper";
import Unique from "./pages/Unique/UniqueMain";
import OrderSumm from "./pages/ShoppingBag/OrderSumm";
import SizesDD from "./pages/ProductDetail/SizesDD";
import StoreLocator from "./pages/StoreLocator/StoreLocator";
import CheckOut from "./shop/CheckOut/CheckOut";
import UniqueTag from "./pages/Unique/UniqueTag";
import OrderConfirmation from "./pages/Etc/OrderConfirmation";
import PageNotFound from "./pages/Etc/PageNotFound";

import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ListH from "./pages/Luggage/ProductListH";
import Loginh from "./user/Login/Loginh";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Unique}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/product" component={ProductDetailH}></Route>
          <Route exact path="/producth" component={ProductDetail}></Route>
          <Route exact path="/cart" component={CartWrapper}></Route>
          <Route exact path="/ordersumm" component={OrderSumm}></Route>
          <Route exact path="/test" component={SizesDD}></Route>
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/accList" component={AccList} />
          <Route exact path="/locator" component={StoreLocator} />
          <Route exact path="/CheckOut" component={CheckOut}></Route>
          <Route exact path="/Uniquetag" component={UniqueTag}></Route>
          <Route exact path="/shoppingcart" component={ShoppingCart}></Route>
          <Route exact path="/listh" component={ListH}></Route>
          <Route exact path="/loginh" component={Loginh}></Route>
          <Route
            exact
            path="/ordersuccess"
            component={OrderConfirmation}
          ></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
