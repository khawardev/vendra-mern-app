/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import '../assets/styles/CartPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, setTotalSubtotal, selectCartItems } from '../toolkit/Slices/CartSlice';
import { BsCartX } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/CartPage.scss';

import { BsCreditCard2Front } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";


const CartPage = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    // const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const cartItems = useSelector(selectCartItems);
    const totalSubtotal = useSelector((state) => state.cart.totalSubtotal);


    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (option) => {
        setSelectedOption(option);

    };



    
    const handleDecrement = (productId) => {
        const currentQuantity = cartItems.find(item => item.id === productId).quantity;
        const updatedQuantity = Math.max(1, currentQuantity - 1);
        setQuantity(updatedQuantity);
        dispatch(updateQuantity({ itemId: productId, quantity: updatedQuantity }));
    };

    const handleIncrement = (productId) => {
        const updatedQuantity = cartItems.find(item => item.id === productId).quantity + 1;
        setQuantity(updatedQuantity);
        dispatch(updateQuantity({ itemId: productId, quantity: updatedQuantity }));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    useEffect(() => {
        const newTotalSubtotal = cartItems.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
        dispatch(setTotalSubtotal(newTotalSubtotal));
        // dispatch(setProductQuantity([item?.quantity]));
    }, [cartItems]);

    return (
        <div className=" w-11/12 m-auto my-20">

            {cartItems?.length != 0 ?
                <>
                    <p className=' font-bold   text-6xl text-yellow-500  text-center my-12'>Cart</p>

                    <main className=' flex items-start gap-3  '>
                        <main>


                            <table className="w-full  col-span-1 text-sm text-left text-gray-500 dark:text-gray-400  ">
                                <thead className="   text-gray-700 font-bold   uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
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
                                            Quantity
                                        </th>

                                        <th scope="col" className="p-4">
                                            Subtotal
                                        </th>
                                        <th scope="col" className="py-4 px-2">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems?.map((cartItems) => (

                                        <tr key={cartItems.id} className=" select-none">
                                           
                                            <td className="flex py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className='   flex items-center justify-center'>
                                                    <img
                                                        src={`https://ucarecdn.com/${cartItems?.imageurl}/`}
                                                        alt="iMac Front Image"
                                                        className=" w-14 mix-blend-multiply rounded-md "
                                                    />
                                                </div>
                                            </td>
                                            <td className=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                                <div className='  font-bold    w-[369px] line-clamp-1 '>
                                                    <p >{cartItems.name}</p>
                                                    <p >{cartItems.name}</p>

                                                </div>
                                                <div className='   text-gray-500  w-[249px] line-clamp-1 '>
                                                    <p >{cartItems.desc}</p>
                                                    <p >{cartItems.desc}</p>

                                                </div>
                                            </td>

                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center font-bold   text-gray-500">
                                                    ${cartItems?.price}
                                                </div>
                                            </td>



                                            <td scope="row" className="px-4  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className=" flex justify-between items-center gap-8 border rounded-full py-2 px-3">
                                                    <div className='px-3 font-bold  '>
                                                        {/* {quantity} */}
                                                        <input type="text" size={1} value={cartItems?.quantity || quantity} name="" disabled id="" />
                                                    </div>
                                                    <div className="flex  items-center gap-1">
                                                        <p
                                                            type="button"
                                                            className="w-6 h-6 inline-flex justify-center  items-center text-sm font-medium rounded-full cursor-pointer text-gray-800 shadow-lg border hover:bg-gray-100"
                                                            data-hs-input-number-decrement
                                                            onClick={() => handleDecrement(cartItems?.id)}
                                                        >
                                                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>

                                                        </p>
                                                        <p
                                                            type="button"
                                                            className="w-6 h-6 inline-flex justify-center  items-center text-sm font-medium rounded-full cursor-pointer text-gray-800 shadow-lg border hover:bg-gray-100"
                                                            data-hs-input-number-increment
                                                            onClick={() => handleIncrement(cartItems?.id)}
                                                        >
                                                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                        </p>
                                                    </div>
                                                </div>



                                            </td>
                                            <td className=" py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center space-x-4">
                                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <div className="flex items-center font-bold   text-gray-500">
                                                            ${(cartItems?.price * cartItems.quantity).toFixed(2)}
                                                        </div>
                                                    </td>
                                                </div>
                                            </td>
                                            <td className=" py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center space-x-4">

                                                    <button
                                                        onClick={() => handleRemoveFromCart(cartItems.id)}
                                                        type="button"
                                                        data-modal-target="delete-modal"
                                                        data-modal-toggle="delete-modal"
                                                        className="flex items-center text-red-600  border  hover:bg-red-100 transition-all ease-in  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
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
                            <section className='flex justify-between items-center my-3'>

                                <div className=' flex ietm-center gap-4 '>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className='border px-2 rounded-md text-sm '
                                        // value={formData.firstName}
                                        // onChange={handleInputChange}
                                        required
                                        placeholder=' Coupon Code'
                                    />
                                    <button className='rounded-md cursor-pointer w-full justify-center p-3 text-sm  bg-black  text-white  flex items-center gap-2 transition-all ease-in-out' >Apply Coupon</button>
                                </div>
                                <button className='rounded-md cursor-pointer  justify-center p-3 text-sm  bg-black  text-white  flex items-center gap-2 transition-all ease-in-out' >Remove All</button>



                            </section>
                        </main>



                        {cartItems?.length != 0 && <>
                            <div className=' p-8  border-2 border-black rounded-md w-[600px]   '>
                                <p className=' text-2xl   font-bold   mb-6'>Cart Total</p>
                                <main className=' '>

                                    <main className='my-3 flex justify-between items-center'>
                                        <p className='font-bold   text-lg'>Subtotal</p>
                                        <p>${totalSubtotal.toFixed(2)}</p>
                                    </main>
                                    <hr className=' my-3' />
                                    <main >
                                        <p className='font-bold   mb-2 text-lg'>Shipping</p>
                                        <div className="flex flex-col space-y-2 ">
                                            <label className={`cursor-pointer flex justify-between border py-2 transition-all ease-in 
                                                                ${selectedOption === 'COD' ? 'bg-gray-200' : 'hover:bg-gray-200'} items-center px-3 rounded-md`}>
                                                <div className='flex justify-between items-center '>
                                                    <input
                                                        type="checkbox"
                                                        value="COD"
                                                        checked={selectedOption === 'COD'}
                                                        onChange={() => handleRadioChange('COD')}
                                                        className="mr-2 cursor-pointer p-3"
                                                    />
                                                    <b >Cash on delivery</b>
                                                </div>

                                                <CiDeliveryTruck size={20} />

                                            </label>
                                            <label className={`  cursor-pointer flex justify-between border py-2 transition-all ease-in 
                                                                ${selectedOption === 'Card' ? 'bg-gray-200' : 'hover:bg-gray-200'} items-center px-3 rounded-md`}>
                                                <div className='flex justify-between items-center '>
                                                    <input
                                                        type="checkbox"
                                                        value="Card"
                                                        checked={selectedOption === 'Card'}
                                                        onChange={() => handleRadioChange('Card')}
                                                        className="mr-2  cursor-pointer"
                                                    />
                                                    <span className=""></span>
                                                    <b> Card payment</b>
                                                </div>

                                                <BsCreditCard2Front size={18} />
                                            </label>

                                        </div>
                                    </main>
                                    <hr className=' mt-3 mb-4' />
                                    <main className=' flex justify-between items-center '>

                                        <p className='font-bold   text-lg'>Total</p>
                                        <p className=' font-bold   text-xl  '>${totalSubtotal.toFixed(2)}</p>
                                    </main>
                                    <hr className=' mt-3 mb-4' />

                                    <button onClick={() => Navigate(`/checkout`)} className='cart-button rounded-lg cursor-pointer w-full justify-center py-[11px]  bg-black  text-white  flex items-center gap-2 transition-all ease-in-out'>
                                        Checkout
                                        <span className=' cart-span transition-all ease-in-out transform'>
                                            <IoMdArrowForward />
                                        </span>
                                    </button>
                                </main>

                            </div>

                        </>
                        }
                    </main>




                </>
                :

                <div className='  pb-28 pt-24 justify-center items-center flex flex-col gap-3'>
                    <BsCartX size={130} className=' mb-3  opacity-10' />
                    <span className=' font-bold  ' >No Product In Cart  </span>
                    <p className=" cursor-pointer text-indigo-700 flex items-center  font-bold   bg-indigo-100 gap-2  transition-all ease-in px-4 py-2 rounded-full"
                        onClick={() => Navigate('/shop')}  >Continue shopping  <IoMdArrowForward className=' opacity-100' size={16} /></p>
                </div>

            }













        </div>
    )
}

export default CartPage