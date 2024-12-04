import { combineReducers } from "redux";
import crud from "./crudReducer";

const mainReducer = combineReducers({
    crud1 : crud
})

export default mainReducer;