import { combineReducers } from "redux";
import counter  from "./counterReducer";

const mainReducers = combineReducers({
    kunjal:counter,
})

export default mainReducers;