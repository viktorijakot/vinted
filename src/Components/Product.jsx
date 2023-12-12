import { useContext } from "react";
import { ProductsContext } from "../Components/ProductsContext";
// import { addToCart } from '../Actions/booksActions';
import User from "./User";
import Brand from "./Brand"

export default function Book({ product }) {
  // const { types, dispachCart } = useContext(BooksContext);
  const { users, brands } = useContext(ProductsContext);
  return (
    <div className="product">
        {users.length > 0 && <div className="product__user"><User product={product}/></div>}
      <div className="product__img">
        <img src={product.img[product.main_img]} alt={product.title} />
      </div>
      <div className="product__price">{(+product.price).toFixed(2)} €</div>
      <div className="product__size">
        {product.size.length > 1
          ? product.size.map((size) => size + " / ")
          : product.size}
      </div>
      {brands.length > 0 && <div className="product__brand"><Brand product={product}/></div>}
      {/* <button
        className="btn--add"
        onClick={(_) => dispachCart(addToCart(book.id))}
      >
        Į krepšelį
      </button> */}
    </div>
  );
}
