import { ActionType } from "../contants/actionType"

export const setProduct = (products) => {
  return{
    type: ActionType.SET_PRODUCTS,
    payload: products
  }
}

export const selectedProduct = (product) => {
  return{
    type: ActionType.SELECTED_PRODUCT,
    payload: product
  }
}