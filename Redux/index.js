import Reducer from "./Reducer";
import { combineReducers } from "redux";

const allReducers=combineReducers({
counter:Reducer
})
export default allReducers;