import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./redusers/index";
import { loadState } from "../localStorage";

const persistedState=loadState();
const middlewareEnhancer = applyMiddleware(ReduxThunk);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);
const store = createStore(reducers, persistedState, composedEnhancers);
// const store = createStore(
// reducers,
// {},
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
export default store;
