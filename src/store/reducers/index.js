import { combineReducers } from "redux";
import { positionReducer } from "./positionReducer.js";
import { filterReducer } from "./filterReducer.js";


export const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer
})