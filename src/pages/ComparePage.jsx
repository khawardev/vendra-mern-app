/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { addToCompare, removeCompareProduct, selectCompare } from '../toolkit/Slices/CompareSlice';
import { MdClose } from 'react-icons/md';
import { AiOutlineDelete } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import CategoryProductsNestedSection from '../containers/HomeContainer/HomeNestedContainer/CategoryProductsNestedSection';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { addToCart } from '../toolkit/Slices/CartSlice';
import StarRatingAvg from '../containers/SingleProductContainer/StarRatingAvg'
import { selectReviews } from '../toolkit/Slices/ReviewSlice';
import { selectExchangeRate } from '../toolkit/Slices/CompareSlice';




const ComparePage = () => {
    const reviews = useSelector(selectReviews);
    const comparedProducts = useSelector(selectCompare);
    const dispatch = useDispatch();
    const ExchangeRate = useSelector(selectExchangeRate);

    const handleRemovefromCompare = (id) => {
        toast.success(<span style={{ fontWeight: 'bold' }}>Removed from Compare</span>);
        dispatch(removeCompareProduct(id));
    };
    const handleAddtoCart = (id) => {
        toast.success(<span style={{ fontWeight: 'bold' }}>Removed from Compare</span>);
        dispatch(removeCompareProduct(id));
    };
    const handleAddToCart = (id, name, desc, price, imageurl, quantity) => {
        toast.success(<span style={{ fontWeight: 'bold' }}>Added to cart</span>);
        dispatch(addToCart({ id: id, name: name, desc: desc, price: price, imageurl: imageurl, quantity: quantity }));
    };

    return (
        <>
            {comparedProducts?.length !== 0 ?
                <div className=" py-8 w-11/12 m-auto ">
                    <table className="table-auto border-collapse border  ">
                        <thead>
                            <tr>
                                <th className="border font-bold text-start  px-4 py-2 uppercase"></th>
                                {comparedProducts.map((product, index) => (
                                    <th key={index} className="border text-start px-4 py-2  gap-3"> <span onClick={() => { handleRemovefromCompare(product.id) }} className='flex items-center gap-2 px-5 py-2  border bg-red-100  hover:border-red-300 text-red-600 font-bold    rounded-full  cursor-pointer  justify-center'>Remove <AiOutlineDelete /></span>  </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border font-bold text-start  px-4 py-2 uppercase">Image</th>
                                {comparedProducts.map((product, index) => (
                                    <th key={index} className="border text-center  justify-center px-4 py-6 w-[22%]    "><img className='mix-blend-multiply rounded-2xl   ' src={`https://ucarecdn.com/${product?.imageurl[0]}/`} alt="" /></th>


                                ))}
                            </tr> <tr>
                                <th className="border font-bold text-start  px-4 py-2 uppercase">Name</th>
                                {comparedProducts.map((product, index) => (
                                    <th key={index} className="border text-start px-4 py-2"><span className=' line-clamp-3 leading-5'>{product.name}</span></th>
                                ))}
                            </tr>
                            <tr>
                                <th className="border font-bold text-start  px-4 py-2 uppercase">Description</th>

                                {comparedProducts.map((product, index) => (
                                    <th key={index} className="border text-start px-4 py-6 text-gray-500 font-normal  leading-5  "><span className=' line-clamp-5'>{product.desc}</span></th>
                                ))}
                            </tr>
                            <tr>
                                <td className="border   px-4 py-2 font-bold uppercase">Price</td>
                                {comparedProducts.map((product, index) => (
                                    <td key={index} className="border   px-4 py-2 font-bold"><span className=' text-xs'>{ExchangeRate ? ExchangeRate.code : '$'}</span> {ExchangeRate ? (ExchangeRate.value * product?.price).toFixed(0) : product?.price}</td>

                                ))}
                            </tr>
                            <tr>
                                <td className="border   px-4 py-2 font-bold uppercase">Stock</td>
                                {comparedProducts.map((product, index) => (
                                    <td key={index} className="border   px-4 py-2 font-bold">{product.stock}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="border   px-4 py-2 font-bold uppercase">Rating</td>
                                {comparedProducts.map((product, index) => (
                                    <td key={index} className="border   px-4 py-2">
                                        <span className='flex items-center gap-1  '>
                                            <StarRatingAvg reviews={reviews.flat().filter(review => review.productid === product?.id)} />
                                        </span>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <th className="border font-bold text-start  px-4 py-2 uppercase"></th>
                                {comparedProducts.map((product, index) => (
                                    <th key={index} className="border text-start px-4 py-2  gap-3 "> <span onClick={() => {
                                        handleAddToCart(
                                            product?.id,
                                            product?.name,
                                            product?.desc,
                                            product?.price,
                                            product?.imageurl,
                                            1
                                        );
                                    }} className='flex items-center gap-2 px-5 py-2  border bg-yellow-100  hover:border-yellow-300 text-yellow-600 font-bold    rounded-full  cursor-pointer  justify-center  '>Add to Cart <BsCart2 stroke-width="0.5" /></span>  </th>
                                ))}
                            </tr>
                            {/* Add more rows for other attributes to compare */}
                        </tbody>
                    </table>
                </div> : <CategoryProductsNestedSection name={'Compare'} filteredProducts={[]} />}

        </>


    )
}

export default ComparePage