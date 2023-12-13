import { createContext, useReducer, useEffect, useState, useRef } from "react";
import productsReducer from "../Reducers/productsReducer";
import {
  loadIdFromServer,
  loadProductsFromServer,
  loadUsersFromServer,
  loadBrandsFromServer,
  loadBrandsAllFromServer,
  filterProductsBrand,
  loadCategoriesFromServer,
  filterCategories
} from "../Actions/productsActions";
import axios from "axios";

export const ProductsContext = createContext();

const NEWS_ID_URL = "https://in3.dev/vinted/api/news/";
const PRODUCTS_URL = "https://in3.dev/vinted/api/products/";
const PRODUCTS_USERS_URL = "https://in3.dev/vinted/api/users/";
const PRODUCTS_BRANDS_URL = "https://in3.dev/vinted/api/brands/";
const BRANDS_ALL_URL = "https://in3.dev/vinted/api/brands/all";
const CATEGORIES_ALL_URL = "https://in3.dev/vinted/api/cats/all"

export const ProductsProvider = ({ children }) => {
  const [newsID, dispachNewsID] = useReducer(productsReducer, null);
  const [products, dispachProducts] = useReducer(productsReducer, []);
  const [users, dispachUsers] = useReducer(productsReducer, []);
  const [brands, dispachBrands] = useReducer(productsReducer, []);
  const [brandsAll, dispachBrandsAll] = useReducer(productsReducer, null);
  const [categories, dispachCategories] = useReducer(productsReducer, null);

  const [filterBrand, setFilterBrand] = useState(0);
  const filterLoaded = useRef(false);

  const [filterCat, setFilterCat] = useState(0);
  const filterCatLoaded = useRef(false);

  useEffect(() => {
    axios
      .get(NEWS_ID_URL)
      .then((res) => dispachNewsID(loadIdFromServer(res.data)))
      .catch((err) => console.log(err));
    axios
      .get(BRANDS_ALL_URL)
      .then((res) => dispachBrandsAll(loadBrandsAllFromServer(res.data)))
      .catch((err) => console.log(err));
    axios
      .get(CATEGORIES_ALL_URL)
      .then((res) => dispachCategories(loadCategoriesFromServer(res.data)))
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

  useEffect(
    () => {
      if (!filterLoaded.current) {
        filterLoaded.current = true;
        return;
      }
      dispachProducts(filterProductsBrand(filterBrand));
    },
    [filterBrand]
  );

  useEffect(
    () => {
      if (!filterCatLoaded.current) {
        filterCatLoaded.current = true;
        return;
      }
      dispachProducts(filterCategories(filterCat));
    },
    [filterCat]
  );

  return (
    <ProductsContext.Provider
      value={{
        products,
        users,
        brands,
        brandsAll,
        filterBrand,
        setFilterBrand,
        setFilterCat,
        categories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
