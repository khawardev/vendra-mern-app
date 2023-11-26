/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import NewProducts from '../containers/HomeContainer/NewProducts';
import { useSelector } from 'react-redux';
import { selectProducts } from '../toolkit/Slices/ProductsSlice'
import { selectCategories } from '../toolkit/Slices/CategoriesSlice'
const ViewCategoryProductsPage = () => {

    const { categoryid } = useParams();  
    const products = useSelector(selectProducts);
    const categories = useSelector(selectCategories);

    const filteredProducts = products.filter(product => product?.category === categoryid);
    const filteredcategory = categories.filter(category => category?._id === categoryid);


    return (
        <>
            <div className=' w-11/12 m-auto my-10'>
                <NewProducts grid={' md:grid-cols-5 sm:grid-cols-3 grid-cols-2'} NewProductBanner={false} filteredProducts={filteredProducts} title={filteredcategory[0]?.name} discount={false} />
            </div>

        </>
    )
}

export default ViewCategoryProductsPage