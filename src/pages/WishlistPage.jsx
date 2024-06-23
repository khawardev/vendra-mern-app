/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, selectWishlistItems } from '../toolkit/Slices/WishlistSlice';

import { addToCart } from '../toolkit/Slices/CartSlice';
import { useNavigate } from 'react-router-dom';
import { FaHeartBroken } from "react-icons/fa";
import '../assets/styles/CartPage.scss';
import { BsCart2 } from 'react-icons/bs';
import { IoMdArrowForward } from "react-icons/io";
import toast from 'react-hot-toast';
import { selectExchangeRate } from '../toolkit/Slices/CompareSlice';

// import { addToWishlist, removeFromWishlist, clearWishlist, selectWishlistItems } from './wishlistSlice';

const WishlistPage = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const ExchangeRate = useSelector(selectExchangeRate);

    const wishlistItems = useSelector(selectWishlistItems);
    const handleRemoveFromWishlist = (productId) => {
        dispatch(removeFromWishlist(productId));
    };
    // const handleAddToCart = () => {
    //     dispatch(addToCart({ id: wishlistItems.id, name: wishlistItems.name, desc: wishlistItems.desc, price: wishlistItems.price, imageurl: wishlistItems.imageurl, quantity: 1 }));
    // };
    const handleAddToCart = (id, name, desc, price, imageurl, quantity) => {
        toast.success(<span style={{ fontWeight: 'bold' }}>Added to cart</span>);
        dispatch(addToCart({ id: id, name: name, desc: desc, price: price, imageurl: imageurl, quantity: quantity }));
    };
    //   const handleRemoveFromWishlist = (itemId) => {
    //     dispatch(removeFromWishlist(itemId));
    //   };

    //   const handleClearWishlist = () => {
    //     dispatch(clearWishlist());
    //   };

    return (
        <div className=" w-11/12 m-auto my-20">

            {wishlistItems?.length != 0 ?
                <>
                    <p className=' font-bold   text-6xl text-yellow-500  text-center my-12'>Wishlist</p>
                    <div className="w-full text-sm text-left text-gray-500  ">

                        {/* <thead className=" bg-gray-50   text-gray-700 font-bold   uppercase  ">
                            <tr >
                                <th scope="col" className="p-4">
                                    Product
                                </th>
                                <th scope="col" className="p-4">

                                </th>
                                <th scope="col" className="p-4">
                                    Price
                                </th>


                                 <th scope="col" className="md:block hidden p-4">
                                    Stock
                                </th>
                                <th scope="col" className="p-4">
                                    Add to cart
                                </th>
                                <th scope="col" className="py-4 px-2">
                                    Action
                                </th>
                            </tr>
                        </thead> */}
                        <div>
                            {wishlistItems?.map((WishlistItems) => (
                                <>
                                    <div key={WishlistItems.id} className=" select-none  w-full p-3  flex gap-6 border rounded-xl my-4">
                                        <section className=" py-4    font-medium text-gray-900  dark:text-white">
                                            <img
                                                src={`https://ucarecdn.com/${WishlistItems?.imageurl[0]}/-/scale_crop/500x500/`}
                                                alt="iMac Front Image"
                                                className="   md:w-24  mix-blend-multiply "
                                            />
                                        </section>
                                        <section className=" md:flex   md:justify-between md:items-center  w-full">

                                            <div className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className='  font-bold    md:w-[749px] w-[189px]  line-clamp-1 '>
                                                    <p >{WishlistItems.name}</p>
                                                    <p >{WishlistItems.name}</p>

                                                </div>
                                                <div className='   text-gray-500  md:w-[449px] w-[159px] line-clamp-1 '>
                                                    <p >{WishlistItems.desc}</p>
                                                    <p >{WishlistItems.desc}</p>

                                                </div>
                                            </div>
                                            <div className=" md:flex  justify-center items-center gap-5  ">
                                                <div className=" font-bold   text-gray-500 md:my-0 my-3">
                                                    <span className=" text-xs">{ExchangeRate ? ExchangeRate.code : 'USD'}</span> {ExchangeRate ? (ExchangeRate.value * WishlistItems?.price).toFixed(0) : WishlistItems?.price}
                                                </div>
                                                <div className="flex gap-5 ">

                                                    <p className="flex items-center md:rounded-full rounded-md text-nowrap font-bold border   cursor-pointer text-yellow-600 hover:bg-yellow-100 transition-all ease-in  focus:ring-4 focus:outline-none focus:ring-yellow-300  1 px-3 py-2"
                                                        onClick={() => {

                                                            handleAddToCart(
                                                                WishlistItems?.id,
                                                                WishlistItems?.name,
                                                                WishlistItems?.desc,
                                                                WishlistItems?.price,
                                                                WishlistItems?.imageurl,
                                                                1
                                                            );
                                                        }}  >  <span> Add to cart </span> </p>

                                                    <button
                                                        onClick={() => handleRemoveFromWishlist(WishlistItems.id)}
                                                        type="button"
                                                        data-modal-target="delete-modal"
                                                        data-modal-toggle="delete-modal"
                                                        className="flex items-center text-red-600 hover:bg-red-100 transition-all ease-in  focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full 1 px-3 py-2 "
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4 mr-2 -ml-0.5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <b>Delete</b>
                                                    </button>
                                                </div>

                                            </div>
                                        </section>


                                    </div>

                                </>

                            ))}
                        </div>



                    </div>
                </>
                :

                <div className='  pb-28 pt-24 justify-center items-center flex flex-col gap-3'>
                    <FaHeartBroken size={130} className=' mb-3  opacity-10' />
                    <span className=' font-bold  ' >No Product In Wishlist  </span>
                    <p className=" cursor-pointer text-indigo-700 flex items-center  font-bold   bg-indigo-100 gap-2  transition-all ease-in px-4 py-2 rounded-full"
                        onClick={() => Navigate('/shop')}  >Continue shopping  <IoMdArrowForward className=' opacity-100' size={16} /></p>
                </div>
            }










        </div>
    )
}

export default WishlistPage