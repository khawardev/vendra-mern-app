/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// CheckoutForm.js
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { BsCreditCard2Front } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { selectCartItems, selectProductQuantities } from '../toolkit/Slices/CartSlice';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import '../assets/styles/Checkout.scss';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { selectExchangeRate } from '../toolkit/Slices/CompareSlice';

const CheckoutPage = () => {
    const ExchangeRate = useSelector(selectExchangeRate);

    const navigate = useNavigate();
    const loggedIn = localStorage.getItem('loggedIn');
    const cartItems = useSelector(selectCartItems);
    const productQuantity = useSelector(selectProductQuantities);
    const totalSubtotal = useSelector((state) => state.cart.totalSubtotal);
    const { discountApplied } = useParams();
    console.log(discountApplied)
    useEffect(() => {
        // Redirect to login page if user is not logged in
        if (!loggedIn) {
            navigate('/account');
        }
    }, [loggedIn, history]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: null,
        streetAddress: '',
        city: '',
        state: null,
        zipCode: '',
        phoneNumber: '',
        emailAddress: '',
        username: '',
        orderNotes: '',
    });
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        try {
            const orderData = {
                products: cartItems.map(item => item.id),
                totalCost: totalSubtotal,
                paymentMethod: selectedOption,
                customerInfo: formData,
                // Add other form fields as needed
            };

            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                const data = await response.json();

                Swal.fire({
                    icon: 'success',
                    title: 'Order Placed Successfully!',
                    text: 'Thank you for your order. Your order has been placed successfully.',
                }).then(() => {
                    window.location.href = '/'; // Redirect to the home page
                });

                console.log('Order placed successfully:', data);
            } else {
                throw new Error('Order placement failed');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There was an error placing your order. Please try again.',
            });
        }
    };
    // Sample options for country and state select
    const countryOptions = [
        { value: 'pk', label: 'Pakistan' },
        // { value: 'ca', label: 'Canada' },
        // Add more countries as needed
    ];

    const stateOptions = [
        { value: 'ny', label: 'New York' },
        { value: 'ca', label: 'California' },
        // Add more states as needed
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (name, selectedOption) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: selectedOption,
        }));
    };



    const [selectedagree, setselectedagree] = useState(null);
    const handleRadioagreeChange = (option) => {
        setselectedagree(option);
    };


    const [showPaymentCOD, setShowPaymentCOD] = useState(false);
    const [showPaymentCARD, setShowPaymentCARD] = useState(false);

    const handleRadioChange = (option) => {
        setSelectedOption(option);

        if (option === 'COD') {
            setShowPaymentCOD(true);
            setShowPaymentCARD(false);
        } else if (option === 'Card') {
            setShowPaymentCARD(true);
            setShowPaymentCOD(false);
        }
    };


    return (
        <>
            <p className=' font-bold text-6xl text-yellow-500  text-center mt-14'>Checkout</p>



            <div className="checkout-form w-11/12 m-auto grid md:grid-cols-3 grid-cols-2 items-start gap-10 py-14">

                <div className=' col-span-2'>
                    <p className=' text-2xl '>BILLING DETAILS</p>
                    <hr className=' mt-2 mb-7' />
                    <form id="checkoutForm" onSubmit={handleSubmit}>
                        <div className="form-row flex gap-5">
                            <div className="form-group w-full">
                                <label >First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group w-full">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* <div className="form-group">
                            <label>Company Name (Optional)</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                            />
                        </div> */}

                        <div className="form-group">
                            <label>Country</label>
                            <Select
                                name="country"
                                options={countryOptions}
                                value={formData.country}
                                onChange={(selectedOption) => handleSelectChange('country', selectedOption)}
                                isSearchable
                                placeholder="Select country"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Street Address</label>
                            <input
                                type="text"
                                name="streetAddress"
                                value={formData.streetAddress}
                                onChange={handleInputChange}
                                required
                                placeholder='House number and street name'
                            />
                        </div>

                        {/* <div className="form-row space-y-4">
                            <div className="form-group">
                                <label>Town/City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <Select
                                    name="state"
                                    options={stateOptions}
                                    value={formData.state}
                                    onChange={(selectedOption) => handleSelectChange('state', selectedOption)}
                                    isSearchable
                                    placeholder="Select state"
                                    required
                                />
                            </div>
                        </div> */}

                        <div className="form-row space-y-4">
                            <div className="form-group">
                                <label>Zip Code</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="emailAddress"
                                value={formData.emailAddress}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* <div className="form-group">
                            <label>Account Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                                placeholder='Username'

                            />
                        </div> */}

                        <div className="form-group">
                            <label>Order Notes (Optional)</label>
                            <textarea
                                name="orderNotes"
                                value={formData.orderNotes}
                                onChange={handleInputChange}
                                rows="4"
                            ></textarea>
                        </div>

                        {/* <button type="submit">Place Order</button> */}
                    </form>
                </div>
                <div className='md:col-span-1 col-span-2 p-8  rounded-md  border-2 border-black w-full   '>
                    <p className=' text-2xl   font-bold   mb-6'>YOUR ORDER</p>

                    <main className=' '>
                        <main className='my-3 flex justify-between items-center'>
                            <p className='font-bold   text-lg'>Product</p>
                            <p className='font-bold   text-lg'>Subtotal</p>
                        </main>
                        <hr className=' my-3' />
                        {cartItems?.map((cartItems, index) => (
                            <div key={cartItems.id}>
                                <main className='my-3 flex justify-between items-center'>
                                    <p className=' flex items-center   w-10/12'>{productQuantity[index]} <div className='mx-1'>x</div> <span className='text-gray-500 line-clamp-1'> {cartItems.name}</span></p>
                                    {/* <p className=' text-gray-500'>${cartItems.price}</p> */}
                                    <p className=' flex items-center  gap-1'><span className=' text-xs'>{ExchangeRate ? ExchangeRate.code : 'USD'}</span> {ExchangeRate ? (ExchangeRate.value * cartItems?.price).toFixed(0) : cartItems?.price}</p>

                                </main>
                            </div>
                        ))}
                        <hr className=' my-3' />
                        {discountApplied === 'true' && (
                            <main className='my-3 t flex justify-between items-center'>
                                <p className='font-bold '>10% Coupon Discount </p>
                                <div className='flex justify-between items-center gap-2'>
                                    {/* <p>-${(totalSubtotal * 0.1).toFixed(2)}</p> */}
                                    <p  >- <span className=' text-xs'>{ExchangeRate ? ExchangeRate.code : 'USD'} </span>{ExchangeRate ? (ExchangeRate.value * totalSubtotal * 0.1).toFixed(0) : totalSubtotal * 0.1.toFixed(0)} </p>

                                </div>
                            </main>
                        )}
                        <main className='my-3 flex justify-between items-center'>
                            <p className='font-bold   text-lg'>Subtotal</p>
                            <p className=' font-bold   text-xl  '><span className=' text-xs'>{ExchangeRate ? ExchangeRate.code : 'USD'} </span> {discountApplied === 'true' ? `${ExchangeRate ? (ExchangeRate.value * (totalSubtotal - (totalSubtotal * 0.1))).toFixed(0) : totalSubtotal - (totalSubtotal * 0.1).toFixed(2)}  ` : `${ExchangeRate ? (ExchangeRate.value * totalSubtotal).toFixed(0) : totalSubtotal}`}</p>

                            {/* <p>${discountApplied === 'true' ? `${(totalSubtotal - (totalSubtotal * 0.1)).toFixed(2)}` : `${totalSubtotal}`}</p> */}
                        </main>
                        <hr className=' my-3' />
                        <main >
                            <p className='font-bold   mb-2 text-lg'>Order</p>
                            <div className="flex flex-col space-y-2 ">
                                <div>
                                    <label
                                        className={`cursor-pointer flex justify-between border py-2 transition-all ease-in ${selectedOption === 'COD' ? 'bg-gray-200' : 'hover:bg-gray-200'} items-center px-3 rounded-md`}
                                    >
                                        <div className='flex justify-between items-center'>
                                            <input
                                                type="checkbox"
                                                value="COD"
                                                checked={selectedOption === 'COD'}
                                                onChange={() => handleRadioChange('COD')}
                                                className="mr-2 cursor-pointer p-3"
                                            />
                                            <b>Card payment</b>

                                        </div>

                                        <CiDeliveryTruck size={20} />
                                    </label>

                                    {showPaymentCOD && (
                                        <div className=" leading-5 text-sm text-gray-500 my-4 ">
                                            <p> <b>Online Payment Method Will be Comming Soon!</b>
                                            </p>
                                        </div>

                                    )}
                                </div>
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
                                        <b>Cash on delivery</b>
                                    </div>

                                    <BsCreditCard2Front size={18} />
                                </label>
                                {showPaymentCARD && (
                                    <div className=" leading-5 text-sm text-gray-500 my-5 ">
                                        <p>Pay with cash upon delivery.</p>
                                    </div>

                                )}
                            </div>
                        </main>
                        <hr className=' mt-3 mb-4' />
                        <main className=' flex justify-between items-center  '>

                            <p className='font-bold   text-lg'>Total</p>
                            <p className=' font-bold   text-xl  '><span className=' text-xs'>{ExchangeRate ? ExchangeRate.code : 'USD'} </span> {discountApplied === 'true' ? `${ExchangeRate ? (ExchangeRate.value * (totalSubtotal - (totalSubtotal * 0.1))).toFixed(0) : totalSubtotal - (totalSubtotal * 0.1).toFixed(2)}  ` : `${ExchangeRate ? (ExchangeRate.value * totalSubtotal).toFixed(0) : totalSubtotal}`}</p>

                            {/* <p className=' font-bold   text-xl  '>${discountApplied === 'true' ? `${(totalSubtotal - (totalSubtotal * 0.1)).toFixed(2)}` : `${totalSubtotal}`}</p> */}
                        </main>
                        <p className=' leading-4 text-sm text-gray-500 my-4'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className=' text-red-500 underline hover:cursor-pointer'>privacy policy.</span></p>

                        <label className={` flex leading-4  items-center text-sm  my-5`}>
                            <input
                                type="checkbox"
                                value="Card"
                                onChange={() => handleRadioagreeChange('agree')}
                                className="mr-2  cursor-pointer"
                            />
                            <span className=""></span>
                            <p> I have read and agree with terms and conditions</p>

                        </label>

                        <button type="submit" form="checkoutForm" className=' rounded-lg cursor-pointer py-[11px] w-full text-center  bg-red-600 hover:bg-red-700  text-white  flex justify-center transition-all ease-in-out'>
                            Place order
                        </button>
                    </main>

                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
