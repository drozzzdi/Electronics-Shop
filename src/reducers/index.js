import choiseCategory from "./choiseCategory";
import counerBasket from "./counerBasket";
import cutPrice from "./cutPrice";
import order from "./order";
import { combineReducers } from "redux";

const allReducers=combineReducers(
    {
        counter: counerBasket,
        choise: choiseCategory,
        orders: order,
        cut: cutPrice
    }
)
export default allReducers;