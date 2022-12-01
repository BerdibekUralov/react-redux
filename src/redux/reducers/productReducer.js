import { ActionType } from "../contants/actionType";

const initialState = {
  product: [
    {
      id: 1,
      title: 'Jack',
      category: 'Product Owner'
    }
  ]
}

export const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return state
    default:
      return state
  }
}