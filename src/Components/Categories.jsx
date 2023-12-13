import { useContext } from 'react';
import { ProductsContext } from '../Components/ProductsContext';

export default function Categories () {
    const { categories, setFilterCat } = useContext(ProductsContext);

    return (
        <div className='brandsAll'>
            <h2>Kategorijos</h2>
            <div className='brandsAll__list'>
                {categories && categories.map(category => <div onClick={(e)=> setFilterCat(e.target.id)}className='listItem' id={category.id} key={category.id}>{category.title}</div>)}
                <div onClick={(e)=> setFilterCat(e.target.id)}className='listItem' id={0} >ALL</div>
            </div>
        </div>
    )
}