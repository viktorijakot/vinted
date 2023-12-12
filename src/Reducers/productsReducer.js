import * as types from "../Constants/actionTypes";

export default function productsReducer(state, action) {
  let s = state === null ? null : [...state];

  switch (action.type) {
    case types.LOAD_ID_FROM_SERVER:
      s = action.payload;
      break;
    case types.LOAD_PRODUCTS_FROM_SERVER:
      s.push(action.payload);
      break;
    case types.LOAD_USERS_FROM_SERVER:
      s.push(action.payload);
      break;
    case types.LOAD_BRANDS_FROM_SERVER:
      s.push(action.payload);
      break;
    default:
  }
  return s;
}
