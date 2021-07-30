import { ActionTypes } from "../constats/action-type";


const initialState = {
  orders: [],
  loading: true,
  newOrder: {},
};
export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ORDERS:
      return { ...state, orders: payload };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: false };
    case ActionTypes.SET_STATUS_ORDER:
      return {
        ...state,
        orders: state.orders.splice(state.orders.findIndex(item => item.id === payload.id), 1, payload)
      }
    case ActionTypes.SET_NEW_ORDER:
      return {
        ...state,
        newOrder: payload
      }
      case ActionTypes.ADD_ORDER:
      return { ...state, orders:[...state.orders,payload] };
   

    default:
      return state;
  }
};