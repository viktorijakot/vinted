import { useContext } from 'react';
import { ProductsContext } from '../Components/ProductsContext';
import Product from "./Product"

export default function Products() {

    const { products } = useContext(ProductsContext);

    return (
        <div className='news'>
            <h2>Naujienų srautas</h2>
        <div className="products">

            {
                products.map(product => product.show && product.showCat ? <Product key={product.id} product={product}/> : null)
            }

        </div>
        </div>
    );
}