/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import '../../../assets/styles/AdminCategoryProducts.scss';
import { VscHeart } from 'react-icons/vsc';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectdiscount } from '../../../toolkit/Slices/DicountSlice'
import BackgroundRemoval from '../../../pages/BackgroundRemoval';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../toolkit/Slices/CartSlice';
import { addToWishlist } from '../../../toolkit/Slices/WishlistSlice';
import { useState, useEffect } from 'react';
import { HiOutlineCheck } from "react-icons/hi";
import { BsCartCheck } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
import { selectRemovedProductIds } from '../../../toolkit/Slices/BestSellingSlice';

const DiscountedNestedSection = ({ sliceProducts, grid }) => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const discount = useSelector(selectdiscount);
    const RemovedProductIds = useSelector(selectRemovedProductIds);


    const [wishlistTragetid, setwishlistTragetid] = useState();
    const [cartTragetid, setcartTragetid] = useState();
    const [wishlistloading, setwishlistloading] = useState(false);
    const [cartloading, setcartloading] = useState(false);

    const handleAddToWishList = (id, name, desc, price, imageurl, quantity) => {
        dispatch(addToWishlist({ id: id, name: name, desc: desc, price: price, imageurl: imageurl, quantity: quantity }));
        setwishlistloading(true);
    };
    const handleAddToCart = (id, name, desc, price, imageurl, quantity) => {
        dispatch(addToCart({ id: id, name: name, desc: desc, price: price, imageurl: imageurl, quantity: quantity }));
        setcartloading(true);
    };


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


    const displayedProducts = Array.isArray(discount)
        ? (sliceProducts ? [...discount.slice(-8)] : [...discount]).reverse()
        : [];

    const calculateDiscountPercentage = (discountedProductsprice, discountedPriceInput) => {
        const originalPrice = discountedProductsprice || 0;
        const discountedPrice = parseFloat(discountedPriceInput) || 0;
        if (originalPrice === 0) {
            return 'N/A';
        }
        const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
        return discountPercentage.toFixed(0);
    };


    return (
        <>
            <div className={`my-7 grid  gap-7 ${grid}`}>
                {displayedProducts.map((product) => (
                    <article key={product.id} className="cursor-pointer  select-none flex flex-col justify-between  Parent-Col-Hover relative">
                        <main>
                            <div>
                                {RemovedProductIds.includes(product.id) && (
                                    <div className='md:top-[1rem] top-[0.40rem] md:right-[15px] right-[10px]  flex justify-center items-center gap-1     rounded-full  rounded-tr-full border-4 border-gray-100   font-bold   text-red-800 bg-red-300 md:px-3 px-2 absolute z-10'>
                                        <FaFire size={14} />  Best Selling
                                    </div>
                                )}
                                <div className='md:top-[1rem] top-[0.40rem]   md:left-[15px] left-[10px]  rounded-full   rounded-tr-full border-4 border-gray-100  text-green-800 font-bold    bg-green-300 md:px-3 px-2 absolute z-10'>
                                    {calculateDiscountPercentage(product?.price, product?.inputDescount)}%
                                </div>
                                <div onClick={() => {
                                    handleAddToWishList(
                                        product.id,
                                        product.name,
                                        product.desc,
                                        product.inputDescount,
                                        product.imageurl,
                                        1
                                    );
                                    setwishlistTragetid(product._id);
                                }} className='md:top-[10.80rem] top-[10.80rem] md:right-[15px] right-[10px] border-4 border-gray-100  bg-gray-300 hover:bg-gray-200 rounded-full  p-[0.40rem] absolute  cursor-pointer z-10'>
                                    {wishlistloading && wishlistTragetid == product._id ? (
                                        <HiOutlineCheck size={20} />
                                    ) : (
                                        <VscHeart size={20} />
                                    )}
                                </div>

                                {/* md:top-[10.80rem] top-[10.80rem] */}
                                {/* md:top-[0.80rem] top-[0.30rem] */}

                            </div>
                            <section onClick={() => Navigate(`/viewsingleproduct/${product?.id}/${RemovedProductIds.includes(product.id) ? true : false}/${true}/${product?.inputDescount}`)}>
                                <section className='    mb-3 rounded-xl p-8 relative bg-gray-100   flex justify-center items-center  border'>
                                    <div className='Parent-product-Image-Hover flex justify-center items-center   '>
                                        {/* <BackgroundRemoval Imageurl={`https://ucarecdn.com/${product?.image}/`} /> */}
                                        <img className='mix-blend-multiply   h-[10rem] w-full ' src={`https://ucarecdn.com/${product?.imageurl}/`} alt="" />
                                    </div>
                                </section>
                                <div className='upper   '>
                                    <span className=' md:leading-5 mb-3 italic text-lg leading-5 line-clamp-2 font-bold     hover:cursor-pointer hover:underline  Parent-product-text-Hover  capitalize  '>{product.name}</span>
                                    <p className=' md:leading-[18px] italic leading-4 mb-3  line-clamp-3  hover:cursor-pointer text-gray-400 '>{product.desc}</p>
                                </div>
                            </section>

                        </main>

                        <main  >

                            <div className='flex justify-between items-center '>
                                <div className='md:flex justify-center items-center gap-2 '>
                                    <p className=' text-lg text-gray-800 font-extrabold font-price leading-5'>${product?.inputDescount}</p>
                                    <p className='  text-sm  line-through font-bold   text-red-500 '>${product?.price}</p>
                                </div>

                                <div onClick={() => {
                                    handleAddToCart(
                                        product?.id,
                                        product?.name,
                                        product?.desc,
                                        product?.inputDescount,
                                        product?.imageurl,
                                        1
                                    );
                                    setcartTragetid(product.id);
                                }} className='p-2 rounded-lg border hover:bg-gray-100 cursor-pointer'>

                                    {cartloading && cartTragetid == product.id ? (
                                        <BsCartCheck size={20} />
                                    ) : (
                                        <BsCart2 size={20} />
                                    )}
                                </div>
                            </div>
                            <span className='flex items-center gap-1  mb-2'>
                                <AiFillStar className=' text-yellow-400 ' size={18} />
                                <AiFillStar className=' text-yellow-400' size={18} />
                                <AiFillStar className=' text-yellow-400' size={18} />
                                <AiFillStar className=' text-yellow-400' size={18} />
                                <AiOutlineStar className=' text-gray-300' size={18} />
                            </span>
                        </main>
                    </article>
                ))}

            </div>



        </>
    );
};

export default DiscountedNestedSection
