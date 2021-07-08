import { combineReducers } from "redux";
import { tokenReduser } from "./tokenReduser";

export const reducers= combineReducers({
    alltokens: tokenReduser,
})