import { useContext } from 'react';
import { ProductsContext } from '../Components/ProductsContext';
import Product from "./Product"

export default function Products() {

    const { products } = useContext(ProductsContext);

    return (
        <div className="products">

            {
                products.map(product => <Product key={product.id} product={product} />)
            }

        </div>
    );
}