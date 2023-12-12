import { useContext } from 'react';
import { ProductsContext } from './ProductsContext';

import Products from './Products';
import Loading from './Loading';


export default function Layout() {

    const { users } = useContext(ProductsContext);

    return (
        <>
            {/* <Top /> */}
            {
                users.length === 0
                ? <Loading />
                : <Products />
             }
        </>
    );
}