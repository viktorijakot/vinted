import * as types from "../Constants/actionTypes";

export default function productsReducer(state, action) {
  let s = state === null ? null : [...state];

  switch (action.type) {
    case types.LOAD_ID_FROM_SERVER:
      s = action.payload;
      break;
    case types.LOAD_PRODUCTS_FROM_SERVER:
      Object.assign(action.payload, { show: true }, {showCat: true});
      s.push(action.payload);
      break;
    case types.LOAD_USERS_FROM_SERVER:
      s.push(action.payload);
      break;
    case types.LOAD_BRANDS_FROM_SERVER:
      s.push(action.payload);
      break;
    case types.LOAD_BRANDS_ALL_FROM_SERVER:
      s = action.payload;
      break;
    case types.FILTER_PRODUCTS_BRAND:
      if (action.payload === 0) {
        // Object.assign(s, { show: true });
        s = s.map((product) => ({ ...product, show: true }));
        break;
      }
      s = s.map((product) =>
        product.brand === action.payload
          ? { ...product, show: true }
          : { ...product, show: false }
      );
      break;
    case types.LOAD_CATEGORIES_FROM_SERVER:
      s = action.payload;
      break;
    case types.FILTER_CATEGORIES:
      if (action.payload === 0) {
        s = s.map((product) => ({ ...product, showCat: true }));
        break;
      }
      s = s.map((product) =>
        product.cat === action.payload
          ? { ...product, showCat: true }
          : { ...product, showCat: false }
      );
      break;
    default:
  }
  return s;
}
