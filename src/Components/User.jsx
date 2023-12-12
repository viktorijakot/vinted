import { useContext } from "react";
import { ProductsContext } from "../Components/ProductsContext";

export default function User({ product }) {
  const { users } = useContext(ProductsContext);
  return (
    <div className="userBox">
      {users && (
        <>
          <div className="userBox__avatar">
            <img
              src={
                users.find((user) => user.id === product.user)?.avatar ?
                users.find((user) => user.id === product.user)?.avatar :
                "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              }
              alt="avatar"
            />
          </div>
          <div className="userBox__name">
            {users.find((user) => user.id === product.user)?.name}
          </div>
        </>
      )}
    </div>
  );
}
