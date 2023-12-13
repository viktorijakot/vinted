import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

import Products from "./Products";
import Loading from "./Loading";
import BrandsAll from "./BrandsAll";
import Categories from "./Categories";

export default function Layout() {
  const { users, brandsAll, categories, products } = useContext(ProductsContext);

  return (
    <>
      {brandsAll && <BrandsAll />}
      {categories && <Categories />}
      {users.length === 0 ? <Loading /> : <Products />}
    </>
  );
}
