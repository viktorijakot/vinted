import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

export default function User({ product }) {
  const { brands } = useContext(ProductsContext);
  return (
    <div className="userBox">
      {brands && (
          <div className="userBox__title">
            {brands.find((brand) => brand.id === product.brand)?.title}
          </div>
      )}
    </div>
  );
}