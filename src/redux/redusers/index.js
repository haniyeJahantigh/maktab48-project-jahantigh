import { combineReducers } from "redux";
import { tokenReduser } from "./tokenReduser";
import {cartReducer} from './cartReducer';
import {productReducer} from './productReducer';
import{ orderReducer }from "./orderReducer"

export const reducers= combineReducers({
    alltokens: tokenReduser,
    cartItem: cartReducer,
    allProduct: productReducer,
    allOrders:orderReducer,
})