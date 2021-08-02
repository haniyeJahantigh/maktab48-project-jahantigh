import { ActionTypes } from "../constats/action-type";
const initialState = []


export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            // return [...state,payload]
            const tempItem = state.find((item) => item.title === payload.title);
            console.log(tempItem);
            console.log(state);
            if (tempItem) {
                let item = state.splice(state.findIndex(item => item.title === payload.title), 1, payload)
                // console.log(item);
                return state
            } else {
                return [...state, payload]
            }

        case ActionTypes.REMOVE_CART_ITEM:
            return state.filter((item, index) => index !== payload);

        case ActionTypes.CLEAR_CART:
              return initialState;

        default:
            return state;
    }
}