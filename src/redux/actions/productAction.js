import {  getAllProducts,getAProductById,addedProduct,updateProduct } from "../../api/productApi";
import { ActionTypes } from "../constats/action-type";

/*
* declare sync actions
*/
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export function addProduct(newProduct) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: newProduct,
  };
};

export function removeProduct(id) {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: id,
  };
};
export function updateProductAction(updatedProduct) {
  return {
    type: ActionTypes.UPDATE_PRODUCT,
    payload: updatedProduct
  }
}



//........................async actions ........................//

/*
 * get all products
 */

export const getProducts = () => async (dispatch, getState) => {
  const res = await getAllProducts();
  console.log(res);
  dispatch(setProducts(res.data));
};

 /*
 * get a product
 */

export const getAProduct = (id) => async (dispatch) => {
  let res = await getAProductById(id);
// console.log("selected",res.data);
  dispatch(selectProduct(res.data));
};

/*
 * async action for add new product
 */

export const addNewProduct = (newProduct) => async (dispatch, getState) => {
  let res = await addedProduct(newProduct);
  dispatch(addProduct(newProduct));
};


/*
 * async action for update product
 */
export const updateProductById = (id, updatedProduct) => async (dispatch, getState) => {
  let res = await updateProduct(id, updatedProduct);

  dispatch(updateProductAction(updateProduct));
};

