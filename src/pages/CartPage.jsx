/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import '../assets/styles/CartPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, setTotalSubtotal, selectCartItems, clearCart, selectProductQuantities } from '../toolkit/Slices/CartSlice';
import { BsCartX } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { BsCreditCard2Front } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";
import { MdClose } from 'react-icons/md';
import { selectExchangeRate } from '../toolkit/Slices/CompareSlice';

import toast from 'react-hot-toast';

const CartPage = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    // const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const cartItems = useSelector(selectCartItems);
    const totalSubtotal = useSelector((state) => state.cart.totalSubtotal);
    const productQuantity = useSelector(selectProductQuantities);

    const ExchangeRate = useSelector(selectExchangeRate);

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
    const handleClearCart = () => {
        toast.success(<span style={{ fontWeight: 'bold' }}>Items Removed</span>);

        dispatch(clearCart());
    };
    useEffect(() => {
        const newTotalSubtotal = cartItems.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
        dispatch(setTotalSubtotal(newTotalSubtotal));
    }, [cartItems]);

    const [couponCode, setCouponCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);

    const handleCouponApply = () => {
        if (discountApplied === true) {
            toast.error(<span style={{ fontWeight: 'bold' }}>Coupon Already Applied</span>)
        }
        else {
            if (couponCode === 'VEND123') {
                setDiscountApplied(true);
                toast.success(<span style={{ fontWeight: 'bold' }}>Coupon Applied</span>);

            } else {
                toast.error(<span style={{ fontWeight: 'bold' }}>Invalid Coupon</span>);

            }
        }
        setCouponCode('')
    };

    const handleCouponDiscard = () => {
        toast.success(<span style={{ fontWeight: 'bold' }}>Coupon Discarded</span>);
        setDiscountApplied(false)
    };


    return (
        <div className=" w-11/12 m-auto my-20 ">

            {cartItems?.length != 0 ?
                <>
                    <p className=' font-bold   text-6xl text-yellow-500  text-center my-12'>Cart</p>

                    <main className=' md:flex items-start gap-3  '>
                        <main>
                            <div>
                                {cartItems?.map((cartItems) => (

                                    <tr key={cartItems.id} className=" select-none   p-3   flex items-center gap-3    rounded-xl my-4">
                                        <section className="  w-full  font-medium text-gray-900  dark:text-white">
                                            <img
                                                src={`https://ucarecdn.com/${cartItems?.imageurl[0]}/`}
                                                alt="iMac Front Image"
                                                className="  mix-blend-multiply w-[3000px]"
                                            />
                                        </section>

                                        <section className='md:flex   items-center gap-5 space-y-1     w-full'>

                                            <section className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className='  font-bold    md:w-[449px] w-[209px]  line-clamp-1 '>
                                                    <p >{cartItems.name}</p>
                                                    <p >{cartItems.name}</p>

                                                </div>
                                                <div className='   text-gray-500  md:w-[249px] w-[159px] line-clamp-1 '>
                                                    <p >{cartItems.desc}</p>
                                                    <p >{cartItems.desc}</p>

                                                </div>
                                            </section>



                                            <section className='flex items-center justify-between gap-5'>

                                                <td className=" font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex items-center font-bold   text-gray-500">
                                                        {/* ${cartItems?.price} */}
                                                        <p><span className=' text-xs'>{ExchangeRate ? ExchangeRate.code : 'USD'} </span>{ExchangeRate ? (ExchangeRate.value * cartItems.price).toFixed(0) : cartItems.price}</p>

                                                    </div>
                                                </td>

                                                <td scope="row" className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                            </section>

                                            <section className='flex justify-between items-center gap-5 '>

                                                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex items-center font-bold   text-gray-500">
                                                        {/* ${(cartItems?.price * cartItems.quantity).toFixed(2)} */}
                                                        <p><span className=' text-xs'>{ExchangeRate ? ExchangeRate.code : 'USD'} </span>{ExchangeRate ? (ExchangeRate.value * cartItems?.price * cartItems.quantity).toFixed(0) : (cartItems?.price * cartItems.quantity).toFixed(2)}</p>

                                                    </div>
                                                </td>
                                                <td className="  font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                            </section>



                                        </section>






                                    </tr>



                                ))}
                            </div>

                            {/* </table> */}
                            <hr />
                            <section className='md:flex md:space-y-0 space-y-3 justify-between items-center my-3 '>

                                <div className=' flex ietm-center gap-4 '>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className='border px-2 rounded-md text-sm '
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        required
                                        placeholder=' Coupon Code'
                                    />
                                    <button onClick={handleCouponApply} className='rounded-md cursor-pointer w-full justify-center p-3 text-sm  bg-black  text-white  flex items-center gap-2 transition-all ease-in-out' >Apply Coupon</button>
                                </div>
                                <button onClick={() => handleClearCart()} className='rounded-md md:w-[20%] w-full cursor-pointer  justify-center p-3 text-sm  bg-red-600  font-bold text-white  flex items-center gap-2 transition-all ease-in-out' >Remove All</button>



                            </section>
                        </main>



                        {cartItems?.length != 0 && <>
                            <div className=' md:p-8 p-4  border-2 border-black rounded-md   '>
                                <p className=' text-2xl   font-bold   mb-6'>Cart Total</p>
                                <main className=' '>

                                    <main className='my-3 flex justify-between items-center'>
                                        <p className='font-bold   text-lg'>Subtotal</p>
                                        {/* <p>${totalSubtotal.toFixed(2)}</p> */}
                                        <p><span className=' text-xs'>{ExchangeRate ? ExchangeRate.code : 'USD'} </span>{ExchangeRate ? (ExchangeRate.value * totalSubtotal).toFixed(2) : totalSubtotal.toFixed(2)}</p>

                                    </main>


                                    <hr className=' my-3' />
                                    <main>
                                        {cartItems?.map((cartItems, index) => (
                                            <div key={cartItems.id}>
                                                <main className='my-3 flex justify-between items-center'>
                                                    <p className=' flex items-center   md:w-[83%] w-[95%]'>{productQuantity[index]} <div className='mx-1'>x</div> <span className='text-gray-500 line-clamp-1'> {cartItems.name}</span></p>
                                                    <p className=' text-gray-500'><span className=' text-xs'>{ExchangeRate ? ExchangeRate.code : 'USD'} </span>{ExchangeRate ? (ExchangeRate.value * cartItems.price).toFixed(0) : (cartItems.price)}</p>
                                                </main>
                                            </div>
                                        ))}
                                    </main>
                                    {/* <main >
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
                                    </main> */}
                                    <hr className=' mt-3 mb-4' />
                                    {discountApplied && (
                                        <main className='my-3 flex justify-between items-center'>
                                            <p className='font-bold '>10% Coupon Discount </p>
                                            <div className='flex justify-between items-center gap-2'>
                                                <p  >- <span className=' text-xs'>{ExchangeRate ? ExchangeRate.code : 'USD'} </span>{ExchangeRate ? (ExchangeRate.value * totalSubtotal * 0.1).toFixed(0) : totalSubtotal * 0.1.toFixed(0)} </p>
                                                <button className=' rounded-full p-1  bg-red-300' onClick={handleCouponDiscard}><MdClose stroke-width={0.1} /></button>

                                            </div>
                                        </main>
                                    )}
                                    <main className=' flex justify-between items-center '>

                                        <p className='font-bold   text-lg'>Total</p>
                                        <p className=' font-bold   text-xl  '><span className=' text-xs'>{ExchangeRate ? ExchangeRate.code : 'USD'} </span> {discountApplied ? `${ExchangeRate ? (ExchangeRate.value * (totalSubtotal - (totalSubtotal * 0.1))).toFixed(0) : totalSubtotal - (totalSubtotal * 0.1).toFixed(2)}  ` : `${ExchangeRate ? (ExchangeRate.value * totalSubtotal).toFixed(0) : totalSubtotal}`}</p>


                                    </main>
                                    <hr className=' mt-3 mb-4' />

                                    <button onClick={() => Navigate(`/checkout/${discountApplied}`)} className='cart-button rounded-lg cursor-pointer w-full justify-center py-[11px]  bg-black  text-white  flex items-center gap-2 transition-all ease-in-out'>
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