import { thunk } from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import mainReducer from "./Reducer";

const store = createStore(mainReducer,applyMiddleware(thunk));

export default  store