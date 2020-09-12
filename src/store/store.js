import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./cart";

const initialStore = {
  items: [],
  total: 0,
  qty: 0,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
