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
                console.log(item);
                return state
                // return state.splice(state.findIndex(item=>item.title === payload.title),1,payload)     
            } else {
                return [...state, payload]
            }

        case ActionTypes.REMOVE_CART_ITEM:
            return state.filter((item, index) => index !== payload);
        //    case ActionTypes.TOGGLE_CART_ITEM:
        //     return state.splice(state.findIndex(item=>item.title === payload.title),1,payload)

        case ActionTypes.CLEAR_CART:
              return initialState;

        default:
            return state;
    }
}
// const initialState={
//     cart:[]
// }
// export const cartReducer=(state=initialState,{type,payload})=>{
//     switch (type) {
//         case ActionTypes.ADD_TO_CART:
//             const tempItem = state.cart.find((item) => item.id === payload.id);
//             if (tempItem) {
//                 return{
//                     ...state,
//                     // cart:state.cart.splice(state.cart.findIndex(item=>item.id === payload.id),1,payload)
//                     cart:state.cart.splice(state.cart.findIndex(item=>item.id === payload.id),1,payload)
//                   }
//             }else{
//                 return{
//                     ...state,
//                     cart:[...state.cart,payload]
//                 }
//             }


//         default:
//             break;
//     }
// }