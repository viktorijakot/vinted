import { useContext } from 'react';
import { ProductsContext } from '../Components/ProductsContext';

export default function BrandsAll () {
    const { brandsAll, setFilterBrand } = useContext(ProductsContext);

    return (
        <div className='brandsAll'>
            <h2>Prekių ženklai</h2>
            <div className='brandsAll__list'>
                {brandsAll && brandsAll.map(brand => <div onClick={(e)=> setFilterBrand(e.target.id)}className='listItem' id={brand.id} key={brand.id}>{brand.title}</div>)}
                <div onClick={(e)=> setFilterBrand(e.target.id)}className='listItem' id={0} >ALL</div>
            </div>
        </div>
    )
}