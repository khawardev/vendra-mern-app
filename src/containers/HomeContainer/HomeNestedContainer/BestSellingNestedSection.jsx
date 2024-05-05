/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import '../../../assets/styles/AdminCategoryProducts.scss';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectbestSelling } from '../../../toolkit/Slices/BestSellingSlice'
import BackgroundRemoval from '../../../pages/BackgroundRemoval';
import { useState, useEffect } from 'react';
import { FaFire } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineErrorOutline } from "react-icons/md";
import fire from '../../../assets/images/fire.svg'
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters

import BestSell2Nested from './BestSell2Nested';


const BestSellingNestedSection = ({ sliceProducts, grid, categoryFilterdProduct }) => {

    const { categoryid } = useParams();




    const Navigate = useNavigate();
    const bestSelling = useSelector(selectbestSelling);

    const [wishlistloading, setwishlistloading] = useState(false);
    const [cartloading, setcartloading] = useState(false);




    useEffect(() => {

        if (wishlistloading == true) {
            const timeoutId = setTimeout(() => {
                setwishlistloading(false);
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
        if (cartloading == true) {
            const timeoutId = setTimeout(() => {
                setcartloading(false);
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [wishlistloading, cartloading]);


    const displayedProducts = Array.isArray(bestSelling)
        ? (sliceProducts ? [...bestSelling.slice(-8)] : [...bestSelling]).reverse()
        : [];

    const categoryFilterdProductIds = Array.isArray(categoryFilterdProduct) ? categoryFilterdProduct.map(item => item._id) : [];
    const BestSellProducts = displayedProducts.filter(product => categoryFilterdProductIds.includes(product.id));




    return (
        <>
            {BestSellProducts?.length !== 0 ? (
                <div className={`grid  gap-7 ${grid}`}>
                    {BestSellProducts.map((product) => (
                        <article key={product?.id} className="cursor-pointer  select-none flex flex-col justify-between  Parent-Col-Hover relative">
                            <BestSell2Nested product={product} />
                        </article>
                    ))}
                </div>
            ) : displayedProducts?.length !== 0 ? (
                <div className={`my-7 grid  gap-7 ${grid}`}>
                    {displayedProducts.map((product) => (
                        <article key={product?.id} className="cursor-pointer  select-none flex flex-col justify-between  Parent-Col-Hover relative">
                            <BestSell2Nested product={product} />
                        </article>
                    ))}
                </div>
            ) : (
                !categoryid && <div >
                    <div className='  pb-28 pt-24 justify-center items-center flex flex-col gap-3'>
                        <MdOutlineErrorOutline size={130} className=' mb-3  opacity-10' />
                        <span className=' font-bold  ' >No Product In Bestselling  </span>
                        <p className=" cursor-pointer text-indigo-700 flex items-center  font-bold   bg-indigo-100 gap-2  transition-all ease-in px-4 py-2 rounded-full"
                            onClick={() => Navigate('/shop')}  >go back <IoMdArrowForward className=' opacity-100' size={16} /></p>
                    </div>
                </div>

            )}



        </>
    );
};

export default BestSellingNestedSection
