// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleProductContainer from '../containers/SingleProductContainer/SingleProductContainer';
import NewProducts from '../containers/HomeContainer/NewProducts';
import { useSelector } from 'react-redux';
import { selectProducts } from '../toolkit/Slices/ProductsSlice'
import { selectCategories } from '../toolkit/Slices/CategoriesSlice'

const ViewSingleProductPage = () => {
    const { productid, BestSell, Discount, DiscountedPrice } = useParams();
    const products = useSelector(selectProducts);
    const filteredProduct = products.filter(product => product?._id === productid);
    const categories = useSelector(selectCategories);
    const filteredcategory = categories.filter(categories => categories?._id === filteredProduct[0]?.category);
    const filteredRelatedProducts = products.filter(products => products?.category === filteredcategory[0]?._id);



    // const filteredRelatedProducts = filteredRelatedProducts.filter(product => product?.category === filteredProduct[0]?._id);

    return (
        <div>
            <div className=' w-11/12 m-auto my-10'>
                <SingleProductContainer DiscountedPrice={DiscountedPrice} BestSell={BestSell} Discount={Discount} filteredProduct={filteredProduct[0]} filteredcategory={filteredcategory[0]} />
                <main className='my-16'>
                    <NewProducts title={'Related Products'} Related={true} viewmore={false} grid={'grid md:grid-cols-5 grid-cols-2 '} filteredProducts={filteredRelatedProducts} />
                </main>
            </div>
        </div>
    )
}

export default ViewSingleProductPage