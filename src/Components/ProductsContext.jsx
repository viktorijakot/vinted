import { createContext, useReducer, useEffect } from "react";
import productsReducer from "../Reducers/productsReducer";
import {
  loadIdFromServer,
  loadProductsFromServer,
  loadUsersFromServer,
  loadBrandsFromServer,
} from "../Actions/productsActions";
import axios from "axios";

export const ProductsContext = createContext();

const NEWS_ID_URL = "https://in3.dev/vinted/api/news/";
const PRODUCTS_URL = "https://in3.dev/vinted/api/products/";
const PRODUCTS_USERS_URL = "https://in3.dev/vinted/api/users/";
const PRODUCTS_BRANDS_URL = "https://in3.dev/vinted/api/brands/";

export const ProductsProvider = ({ children }) => {
  const [newsID, dispachNewsID] = useReducer(productsReducer, null);
  const [products, dispachProducts] = useReducer(productsReducer, []);
  const [users, dispachUsers] = useReducer(productsReducer, []);
  const [brands, dispachBrands] = useReducer(productsReducer, []);

  useEffect(() => {
    axios
      .get(NEWS_ID_URL)
      .then((res) => dispachNewsID(loadIdFromServer(res.data)))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (newsID === null) {
      return;
    } else {
      for (let i = 0; i < newsID.length; i++) {
        axios
          .get(PRODUCTS_URL + newsID[i].id)
          .then((res) => dispachProducts(loadProductsFromServer(res.data)))
          .catch((err) => console.log(err));
      }
    }
  }, [newsID]);

  useEffect(() => {
    if (products.length === 0) {
      return;
    } else {
      for (let i = 0; i < products.length; i++) {
        axios
          .get(PRODUCTS_USERS_URL + products[i].user)
          .then((res) => dispachUsers(loadUsersFromServer(res.data)))
          .catch((err) => console.log(err));
        if (products[i].brand) {
          axios
            .get(PRODUCTS_BRANDS_URL + products[i].brand)
            .then((res) => dispachBrands(loadBrandsFromServer(res.data)))
            .catch((err) => console.log(err));
        }
      }
    }
  }, [products]);

  return (
    <ProductsContext.Provider value={{ products, users, brands }}>
      {children}
    </ProductsContext.Provider>
  );
};
