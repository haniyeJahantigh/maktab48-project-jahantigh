import { ActionTypes } from "../constats/action-type";

const initialState = {
  products: [],
  loading:true,
  selectedProduct: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.ADD_PRODUCT:
      return { ...state, products:[payload,...state.products] };
    case ActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products:state.products.filter((item,index)=>item.id !==payload) 
    }
    case ActionTypes.UPDATE_PRODUCT:
      return {
        ...state,
      products:state.products.splice(state.products.findIndex(item=>item.id === payload.id),1,payload)
      // { ...state, products:updatedData };
    }
    case ActionTypes.SET_LOADING:
      return { ...state, loading: false };
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };

    default:
      return state;
  }
};