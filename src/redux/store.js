import { applyMiddleware, createStore } from "redux";
// import ReduxThunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./redusers/index";

const store = createStore(
reducers,
{},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
