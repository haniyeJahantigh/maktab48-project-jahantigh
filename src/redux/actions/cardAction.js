import { ActionTypes } from "../constats/action-type";

export function addToCart(cartItem){
    return {
        type:ActionTypes.ADD_TO_CART,
        payload:cartItem
    }
}
export function removeCart(id){
    return{
        type:ActionTypes.REMOVE_CART_ITEM,
        payload:id
    }

}
export function clearCart() {
    return{
        type:ActionTypes.CLEAR_CART,
    }
    
}