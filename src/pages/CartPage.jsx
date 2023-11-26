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
const CartPage = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const cartItems = useSelector(selectCartItems);
    const totalSubtotal = useSelector((state) => state.cart.totalSubtotal);

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
    }, [cartItems]);

    return (
        <div className=" w-11/12 m-auto my-20">

            {cartItems?.length != 0 ?
                <>
                    <p className=' font-bold text-6xl text-yellow-500  text-center my-12'>Cart</p>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">

                        <thead className="   text-gray-700 font-bold uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
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
                                    <td className="py-4 flex  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className=' p-2 border bg-gray-100 rounded-md flex items-center justify-center'>
                                            <img
                                                src={`https://ucarecdn.com/${cartItems?.imageurl}/`}
                                                alt="iMac Front Image"
                                                className=" w-14 mix-blend-multiply"
                                            />
                                        </div>
                                    </td>
                                    <td className=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                        <div className='  font-bold  w-[749px] line-clamp-1 '>
                                            <p >{cartItems.name}</p>
                                            <p >{cartItems.name}</p>

                                        </div>
                                        <div className='   text-gray-500  w-[449px] line-clamp-1 '>
                                            <p >{cartItems.desc}</p>
                                            <p >{cartItems.desc}</p>

                                        </div>
                                    </td>

                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center font-bold text-gray-500">
                                            ${cartItems?.price}
                                        </div>
                                    </td>



                                    <td scope="row" className="px-4  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className=" flex justify-between items-center gap-8 border rounded-full py-2 px-3">
                                            <div className='px-3 font-bold'>
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
                                                <div className="flex items-center font-bold text-gray-500">
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
                                                className="flex items-center text-red-600  border  hover:bg-red-100 transition-all ease-in  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
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
                </>
                :
                <div className="Empty-cart ">
                    <div className='  pb-28 pt-14  justify-center items-center flex flex-col gap-3'>
                        <BsCartX className=' mb-6' />
                        <span className=' font-bold' >No product in the Cart</span>
                        <p className=" cursor-pointer text-indigo-700   font-bold bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-5 py-2 rounded-full"
                            onClick={() => Navigate('/')}  >Continue shopping →</p>
                    </div>
                </div>

            }










            {cartItems?.length != 0 && <>
                <hr className='my-3' />
                <div className='my-6 flex  items-center justify-end'>
                    {/* <p className=' rounded-lg  cursor-pointer px-8 py-3 bg-blue-900 hover:bg-blue-950 text-white transition-all ease-in font-bold flex items-center gap-3'>Proceed to Checkout <FaArrowRightLong/> </p> */}
                    <div>

                        <p className=' text-3xl  mb-5'><span className='text-sm'><b>TOTAL</b></span> <br /> <b>${totalSubtotal.toFixed(2)}</b></p>
                        <p className='cart-button rounded-lg cursor-pointer px-8 py-3  bg-blue-900 hover:bg-blue-950 text-white font-bold flex items-center gap-3 transition-all ease-in-out'>
                            Proceed to Checkout
                            <span className=' cart-span transition-all ease-in-out transform'>
                                <FaArrowRightLong />
                            </span>
                        </p>
                    </div>
                </div>

            </>
            }


        </div>
    )
}

export default CartPage