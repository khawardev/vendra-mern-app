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

// import { addToWishlist, removeFromWishlist, clearWishlist, selectWishlistItems } from './wishlistSlice';

const WishlistPage = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const wishlistItems = useSelector(selectWishlistItems);
    const handleRemoveFromWishlist = (productId) => {
        dispatch(removeFromWishlist(productId));
    };
    // const handleAddToCart = () => {
    //     dispatch(addToCart({ id: wishlistItems.id, name: wishlistItems.name, desc: wishlistItems.desc, price: wishlistItems.price, imageurl: wishlistItems.imageurl, quantity: 1 }));
    // };
    const handleAddToCart = (id, name, desc, price, imageurl, quantity) => {
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
                    <table className="w-full text-sm text-left text-gray-500  ">

                        <thead className=" bg-gray-50   text-gray-700 font-bold   uppercase  ">
                            <tr >
                                <th scope="col" className="p-4">
                                    Product
                                </th>
                                <th scope="col" className="p-4">

                                </th>
                                <th scope="col" className="p-4">
                                    Price
                                </th>


                                <th scope="col" className="p-4">
                                    Stock
                                </th>
                                <th scope="col" className="p-4">
                                    Add to cart
                                </th>
                                <th scope="col" className="py-4 px-2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlistItems?.map((WishlistItems) => (
                                <tr key={WishlistItems.id} className=" select-none">
                                    <td className="flex py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className=' p-2 border bg-gray-100 rounded-md flex items-center justify-center'>
                                            <img
                                                src={`https://ucarecdn.com/${WishlistItems?.imageurl}/`}
                                                alt="iMac Front Image"
                                                className=" w-14 mix-blend-multiply"
                                            />
                                        </div>
                                    </td>
                                    <td className=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                        <div className='  font-bold    w-[749px] line-clamp-1 '>
                                            <p >{WishlistItems.name}</p>
                                            <p >{WishlistItems.name}</p>

                                        </div>
                                        <div className='   text-gray-500  w-[449px] line-clamp-1 '>
                                            <p >{WishlistItems.desc}</p>
                                            <p >{WishlistItems.desc}</p>

                                        </div>
                                    </td>

                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center font-bold   text-gray-500">
                                            ${WishlistItems?.price}
                                        </div>
                                    </td>



                                    <td className=" py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center space-x-4">
                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center font-bold   text-gray-500">
                                                    <span className=" select-none px-5 py-1 font-bold   bg-green-100 border rounded-full  border-green-300 text-green-700"> In Stock </span>

                                                </div>
                                            </td>
                                        </div>
                                    </td>
                                    <td className=" py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center space-x-4">
                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center font-bold   text-gray-500">
                                                    <p className="px-5 py-2 border hover:bg-yellow-100 transition-all ease-in  hover:border-yellow-300 hover:text-yellow-600 font-bold    rounded-full  cursor-pointer flex justify-center items-center gap-2"
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
                                                </div>
                                            </td>
                                        </div>
                                    </td>
                                    <td className=" py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center space-x-4">

                                            <button
                                                onClick={() => handleRemoveFromWishlist(WishlistItems.id)}
                                                type="button"
                                                data-modal-target="delete-modal"
                                                data-modal-toggle="delete-modal"
                                                className="flex items-center text-red-600 hover:bg-red-100 transition-all ease-in  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
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

                                    </td>

                                </tr>



                            ))}
                        </tbody>



                    </table>
                    <hr />
                </>
                :
                <div className="Empty-cart ">
                    <div className='  pb-28 pt-14 justify-center items-center flex flex-col gap-3'>
                        <FaHeartBroken className=' mb-6' />
                        <span className=' font-bold  ' >No product in the Wishlist</span>
                        <p className=" cursor-pointer text-indigo-700   font-bold   bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-5 py-2 rounded-full"
                            onClick={() => Navigate('/')}  >Continue shopping →</p>
                    </div>
                </div>
            }










        </div>
    )
}

export default WishlistPage