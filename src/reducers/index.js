import choiseCategory from "./choiseCategory";
import counerBasket from "./counerBasket";
import order from "./order";
import { combineReducers } from "redux";

const allReducers=combineReducers(
    {
        counter: counerBasket,
        choise: choiseCategory,
        orders: order
    }
)
export default allReducers;