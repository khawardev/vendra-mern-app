/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { SlSocialFacebook } from 'react-icons/sl';
import { RiTwitterXFill } from 'react-icons/ri';
import { FiLinkedin } from 'react-icons/fi';
import { SlSocialPintarest } from 'react-icons/sl';
import { BsInstagram } from 'react-icons/bs';
import "../../assets/styles/SingleProduct.scss";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useState } from 'react';
const SingleProductContainer = ({ filteredProduct, filteredcategory }) => {



    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };


    const wordsArray = filteredProduct?.name.split(/\s+/);
    const Productname = wordsArray?.map(word => word.replace(/,/g, '')).slice(0, 3).join(' ');
    return (
        <>
            <p className=" text-sm mb-8"><span className=" text-gray-400">Home / {filteredcategory?.name} /</span> <b>{Productname}</b>  </p>

            <main className=" grid grid-cols-2 gap-16  ">
                <section className='flex justify-start items-center'>
                    <div className=' p-24  bg-gray-100 border rounded-2xl w-full h-[660px] flex justify-center items-center '>
                        <img className='mix-blend-multiply ' src={`https://ucarecdn.com/${filteredProduct?.image}/`} alt="" />
                    </div>
                </section>
                <section className=' flex flex-col justify-between'>
                    <main>

                        <p className=" text-3xl font-bold mb-8 leading-8"> {filteredProduct?.name} </p>
                        <div className="my-8 flex items-center gap-3">
                            <p className=" text-4xl font-bold text-red-500"> ${filteredProduct?.price} </p>
                            <p className=" text-xl  text-gray-300 line-through"> ${filteredProduct?.price} </p>
                        </div>
                        <div className='my-8 flex justify-between items-center'>

                            <span className=" select-none px-5 py-1 font-bold bg-green-100 border rounded-full  border-green-300 text-green-700"> In Stock </span>
                            <div className='flex justify-between items-center gap-3'>
                                <span className='flex items-center gap-1'>
                                    <AiFillStar className=' text-yellow-400 ' size={18} />
                                    <AiFillStar className=' text-yellow-400' size={18} />
                                    <AiFillStar className=' text-yellow-400' size={18} />
                                    <AiFillStar className=' text-yellow-400' size={18} />
                                    <AiOutlineStar className=' text-gray-300' size={18} />
                                </span>
                                <p className='font-bold  border px-5 py-1  rounded-full bg-gray-100 cursor-pointer'>1 • Review</p>
                            </div>
                        </div>
                        <section className=" mb-4 flex justify-between items-center  py-3 select-none ">
                            <div className="flex justify-between gap-3">

                                <div className=" flex justify-between items-center gap-8 border rounded-full px-3">
                                    <div className='px-3'>
                                        {quantity}
                                    </div>
                                    <div className="flex  items-center gap-1">
                                        <p
                                            type="button"
                                            className="w-6 h-6 inline-flex justify-center  items-center text-sm font-medium rounded-full cursor-pointer text-gray-800 shadow-lg border hover:bg-gray-100"
                                            data-hs-input-number-decrement
                                            onClick={handleDecrement}
                                        >
                                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>

                                        </p>
                                        <p
                                            type="button"
                                            className="w-6 h-6 inline-flex justify-center  items-center text-sm font-medium rounded-full cursor-pointer text-gray-800 shadow-lg border hover:bg-gray-100"
                                            data-hs-input-number-increment
                                            onClick={handleIncrement}
                                        >
                                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                        </p>
                                    </div>
                                </div>

                                {/* <p className="px-5 py-2 border bg-yellow-100  border-yellow-300 rounded-full  cursor-pointer">- 1 +</p> */}
                                <p className="px-5 py-2 border bg-yellow-100  hover:border-yellow-300 text-yellow-600 font-bold  rounded-full  cursor-pointer">Add to cart</p>
                            </div>
                            <div className="flex justify-between gap-3 ">
                                <p className="px-5 py-2   font-bold hover:border-gray-300  border rounded-full  cursor-pointer">compare</p>
                                <p className="px-5 py-2 border bg-blue-100  text-blue-600 font-bold hover:border-blue-300  rounded-full  cursor-pointer">Add to Wishlist</p>
                            </div>
                        </section>
                    </main>


                    <main>

                        <p className="mb-4"><b>Categories:</b><span className=" text-blue-500 cursor-pointer text-sm"> {filteredcategory?.name}</span></p>
                        <section className="flex justify-start items-center gap-3 md:mt-0 mt-4">
                            <p><b>Socials: </b></p>
                            <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                                <SlSocialFacebook size={14} />
                            </div>
                            <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                                <RiTwitterXFill size={14} />
                            </div>
                            <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                                <FiLinkedin size={14} />
                            </div>
                            <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                                <SlSocialPintarest size={14} />
                            </div>
                            <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                                <BsInstagram size={14} />
                            </div>
                        </section>
                    </main>
                </section>
            </main>

        </>
    );
};

export default SingleProductContainer;
