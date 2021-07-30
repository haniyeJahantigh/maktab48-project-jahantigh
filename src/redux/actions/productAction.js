import { getAProductById, getAllProducts, addedProduct, deleteProduct, updateProduct } from "../../api/products/products";
import { ActionTypes } from "../constants/action-type.js";

/*
* declare sync actions
*/
export const setToken = (token) => {
  return {
    type: ActionTypes.SET_TOKEN,
    payload: token,
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export function addProduct(newProduct) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: newProduct,
  };
}
export function removeProduct(id) {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: id,
  };
}
export function updateProductAct(updatedProduct) {
  return {
    type: ActionTypes.UPDATE_PRODUCT,
    payload: updatedProduct
  }
}
export function setLoading() {
  return {
    type: ActionTypes.SET_LOADING,
    // payload:
  }
}

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

/*
 * async action for get all products
 */

export const getProducts = () => async (dispatch, getState) => {
  const res = await getAllProducts();
  dispatch(setProducts(res.data));
  dispatch(setLoading())
};

/*
 * async action for add new product
 */

export const addNewProduct = (newProduct) => async (dispatch, getState) => {
  let res = await addedProduct(newProduct);
  dispatch(addProduct(newProduct));
};

/*
 * async action for delete product
 */
export const deleteProductById = (id) => async (dispatch, getState) => {
  let res = await deleteProduct(id);
  dispatch(removeProduct(id));
};
/*
 * async action for update product
 */
export const updateProductById = (id, updatedProduct) => async (dispatch, getState) => {
  let res = await updateProduct(id, updatedProduct);

  dispatch(updateProductAct(updateProduct));
};

/*
 * async action for get a product
 */

export const getAProduct = (id) => async (dispatch) => {
  let res = await getAProductById(id);
// console.log("selected",res.data);
  dispatch(selectedProduct(res.data));
};