import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers ({
    amount: amountReducer
    //currently we have only one reducer we can add more reducers here if we have multiple reducers
})

export default reducers;