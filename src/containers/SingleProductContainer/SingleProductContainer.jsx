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
import { LuGitCompare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2 } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { addToCart } from '../../toolkit/Slices/CartSlice';
import { addToWishlist } from '../../toolkit/Slices/WishlistSlice';
import toast from 'react-hot-toast';
import { FaFire } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { addToCompare, removeCompareProduct, selectCompare } from '../../toolkit/Slices/CompareSlice';
import { MdClose } from 'react-icons/md';
import InnerImageZoom from 'react-inner-image-zoom'
import '../../assets/styles/ZoomImage.scss'
import ReactImageMagnify from 'react-image-magnify';
import { FiPlus } from "react-icons/fi";
import ReviewsModal from '../SingleProductContainer/ReviewsModal';

const SingleProductContainer = ({ filteredProduct, filteredcategory, BestSell, Discount, DiscountedPrice }) => {

    const dispatch = useDispatch();
    const comparedProducts = useSelector(selectCompare);

    const Navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [isProductCompared, setisProductCompared] = useState(false);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const handleAddToCart = () => {
        // toast.success('Added to cart!!');
        // toast.success(<span style={{ fontWeight: 'bold' }}>Added to cart!!</span>);
        toast.success(
            <div style={{ display: 'flex' }}>
                {/* <BsCart2 size={18} style={{ marginRight: '8px'}} /> */}
                <span style={{ fontWeight: 'bold' }}>Added to cart </span>
            </div>
        );
        dispatch(addToCart({ id: filteredProduct._id, name: filteredProduct.name, desc: filteredProduct.description, price: filteredProduct.price, imageurl: filteredProduct.image, quantity: quantity }));
        setQuantity(1); // Reset quantity after adding to cart
    };
    const handleAddToWishList = () => {
        toast.success(<span style={{ fontWeight: 'bold' }}>Added to wishlist</span>);
        // toast.success('Added to wishlist!!');
        dispatch(addToWishlist({ id: filteredProduct._id, name: filteredProduct.name, desc: filteredProduct.description, price: filteredProduct.price, imageurl: filteredProduct.image, quantity: quantity }));
    };


    // useEffect(() => {
    //     const compareObject = comparedProducts.some(product => product.id === filteredProduct._id);
    //     setisProductCompared(compareObject)
    // }, [isProductCompared]);
    useEffect(() => {
        const isCompared = comparedProducts.some(product => product.id === filteredProduct._id);
        setisProductCompared(isCompared)
    }, [filteredProduct?._id]);


    const handleAddToCompare = () => {
        setisProductCompared(!isProductCompared)
        const isCompared = comparedProducts.some(product => product.id === filteredProduct._id);
        const action = isCompared ? removeCompareProduct(filteredProduct._id) : addToCompare({
            id: filteredProduct._id,
            name: filteredProduct.name,
            desc: filteredProduct.description,
            price: filteredProduct.price,
            stock: filteredProduct.stock,
            imageurl: filteredProduct.image,
        });
        const toastMessage = isCompared ? 'Removed from Compare' : 'Removed to Compare';
        toast.success(<span style={{ fontWeight: 'bold' }}>{toastMessage}</span>);

        dispatch(action);


        // dispatch(
        //     addToCompare({
        //         id: filteredProduct._id,
        //         name: filteredProduct.name,
        //         desc: filteredProduct.description,
        //         price: filteredProduct.price,
        //         imageurl: filteredProduct.image,
        //     })
        // );

        // const isProductCompared = comparedProducts.some(product => product.id === filteredProduct._id);
        // if (isProductCompared) {
        //     toast.success(<span style={{ fontWeight: 'bold' }}>Removed from Compare</span>);
        //     dispatch(removeCompareProduct(id: filteredProduct._id,
        //         name: filteredProduct.name,
        //         desc: filteredProduct.description,
        //         price: filteredProduct.price,
        //         imageurl: filteredProduct.image,));
        // } else {
        //     toast.success(<span style={{ fontWeight: 'bold' }}>Added to Compare</span>);
        //     dispatch(addToCompare({
        //         id: filteredProduct._id,
        //         name: filteredProduct.name,
        //         desc: filteredProduct.description,
        //         price: filteredProduct.price,
        //         imageurl: filteredProduct.image,
        //     }));
        // }
    };

    const wordsArray = filteredProduct?.name.split(/\s+/);
    const Productname = wordsArray?.map(word => word.replace(/,/g, '')).slice(0, 3).join(' ');


    const calculateDiscountPercentage = (discountedProductsprice, discountedPriceInput) => {
        const originalPrice = discountedProductsprice || 0;
        const discountedPrice = parseFloat(discountedPriceInput) || 0;
        if (originalPrice === 0) {
            return 'N/A';
        }
        const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
        return discountPercentage.toFixed(0);
    };
    const [zoomedImageSrc, setZoomedImageSrc] = useState();
    const handleImageClick = (newSrc) => {
        setZoomedImageSrc(newSrc);
    };
    useEffect(() => {
        setZoomedImageSrc(filteredProduct?.image[0])
    }, [filteredProduct?.image]);


const [Showmodal, setShowmodal] = useState(false);
    return (
        <>


            <p className=" text-sm mb-8"><span className=" text-gray-400"> <span className=' cursor-pointer' onClick={() => Navigate(`/`)}>Home</span> / <span className=' cursor-pointer' onClick={() => Navigate(`/viewcategoryproducts/${filteredcategory?._id}`)}> {filteredcategory?.name} </span>  /</span> <b>{Productname}</b>  </p>

            <main className=" grid grid-cols-4 gap-12 mb-18  ">
                <section className='grid grid-cols-5 gap-6 col-span-2'>
                    <section className='flex flex-col gap-5 col-span-1'>
                        {filteredProduct?.image.map((imageUUID, index) => (
                            <img
                                key={index} // Make sure to use a unique key for each image
                                className='mix-blend-multiply flex justify-center items-center rounded-xl cursor-pointer'
                                src={`https://ucarecdn.com/${imageUUID}/`} // Assuming imageUUID is the actual UUID of the image
                                alt={`Image ${index + 1}`} // Add alt text to improve accessibility
                                onClick={() => handleImageClick(imageUUID)} // Pass the imageUUID to the click handler
                            />
                        ))}
                        {/* <img
                            className='mix-blend-multiply flex justify-center items-center rounded-xl cursor-pointer'
                            src={`https://ucarecdn.com/${filteredProduct?.image}/`}
                            alt=""
                            onClick={() => handleImageClick(filteredProduct?.image)}
                        />
                        <img
                            className='mix-blend-multiply flex justify-center items-center rounded-xl cursor-pointer'
                            src={`https://ucarecdn.com/1ae0efb9-a611-4e91-a0d0-198496315028/`}
                            alt=""
                            onClick={() => handleImageClick('1ae0efb9-a611-4e91-a0d0-198496315028')}
                        />
                        <img
                            className='mix-blend-multiply flex justify-center items-center rounded-xl cursor-pointer'
                            src={`https://ucarecdn.com/2108c71d-2624-4bf9-bb56-d85946fef18e/`}
                            alt=""
                            onClick={() => handleImageClick('2108c71d-2624-4bf9-bb56-d85946fef18e')}
                        />
                        <img
                            className='mix-blend-multiply flex justify-center items-center rounded-xl cursor-pointer'
                            src={`https://ucarecdn.com/21f193b7-86ff-4012-82b5-7689b17737cc/`}
                            alt=""
                            onClick={() => handleImageClick('21f193b7-86ff-4012-82b5-7689b17737cc')}
                        /> */}

                    </section>
                    <section className='flex justify-start col-span-4'>
                        <div className=' rounded-2xl px-3'>
                            <InnerImageZoom
                                className='w-full mix-blend-multiply rounded-2xl'
                                src={`https://ucarecdn.com/${zoomedImageSrc}/`}
                            />
                        </div>
                    </section>
                </section>
                <section className=' flex flex-col justify-between col-span-2 py-2'>

                    <main className='mb-8'>
                        <p className=" text-3xl   font-bold    mb-8 leading-8 "> {filteredProduct?.name} </p>
                        <div className="my-8 flex items-center justify-between ">
                            <div className='flex items-center gap-3'>
                                {Discount === 'true' ?
                                    <>
                                        <p className=" text-3xl font-bold   text-red-500"> ${DiscountedPrice}.00 </p>
                                        <p className=" text-xl    text-gray-300 line-through"> ${filteredProduct?.price}.00 </p>
                                    </>
                                    : <p className=" text-3xl font-bold   text-red-500"> ${filteredProduct?.price}.00 </p>}



                            </div>

                            <section className='flex items-center gap-2'>
                                {Discount === 'true' && <div className='rounded-full   text-green-800 bg-green-200  font-bold py-1  md:px-3 px-2 '>
                                    {calculateDiscountPercentage(filteredProduct?.price, DiscountedPrice)}%
                                </div>
                                }
                                {BestSell === 'true' && <div className=' flex justify-center items-center gap-1   rounded-full   bg-orange-200    font-bold   text-orange-700 p-[10px]  '>
                                    <FaFire size={14} />
                                </div>
                                }

                            </section>


                        </div>
                        <div className='my-8 flex justify-between items-center'>

                            <span className=" select-none px-3  font-bold   bg-green-100 border rounded-full  border-green-300 text-green-700"> In Stock </span>
                            <div className='flex justify-between items-center gap-3'>
                                <span className='flex items-center gap-1'>
                                    <AiFillStar className=' text-yellow-400 ' size={18} />
                                    <AiFillStar className=' text-yellow-400' size={18} />
                                    <AiFillStar className=' text-yellow-400' size={18} />
                                    <AiFillStar className=' text-yellow-400' size={18} />
                                    <AiOutlineStar className=' text-gray-300' size={18} />
                                </span>
                                {/* <p onClick={<ModalComponent />} className='font-bold    border px-2 py-1 rounded-full bg-gray-100 cursor-pointer flex gap-1 justify-center items-center '> <FiPlus stroke-width={3} /> Add Review</p> */}
                            
                                {/* <p onClick={() => setShowmodal(!Showmodal)} className='font-bold border px-2 py-1 rounded-full bg-gray-100 cursor-pointer flex gap-1 justify-center items-center'>
                                    <FiPlus strokeWidth={3} /> Add Review
                                </p> */}
                                <ReviewsModal />
                            </div>
                        </div>
                        <section className=" mb-4 flex justify-between items-center  py-3 select-none ">
                            <div className=" flex justify-between items-center gap-8 border rounded-full px-4 py-2 ">
                                <div className='px-3 font-bold  '>
                                    <input type="text" size={1} value={quantity} name="" disabled id="" />
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
                            <div className=' flex justify-between gap-3'>
                                <p className={`px-5 py-2   font-bold   hover:border-gray-300  ${isProductCompared && `bg-gray-100`}  border rounded-full  cursor-pointer flex  justify-center items-center gap-2`}
                                    onClick={() => { handleAddToCompare() }}>
                                    {isProductCompared ? (
                                        <>
                                            Compared <MdClose />
                                        </>
                                    ) : (
                                        <>
                                            Compare <LuGitCompare />
                                        </>
                                    )}  </p>
                                <p onClick={() => { handleAddToWishList() }} className=" px-5 py-2 border bg-blue-100  text-blue-600 font-bold   hover:border-blue-300  rounded-full  cursor-pointer flex  justify-center items-center gap-2">Wishlist  <FaRegHeart /></p>
                            </div>
                        </section>

                        <div className="flex justify-between gap-3 mb-9 ">

                            <p className="px-5 py-2   w-full border bg-yellow-100  hover:border-yellow-300 text-yellow-600 font-bold    rounded-full  cursor-pointer flex justify-center items-center gap-2" onClick={() => {
                                handleAddToCart();
                            }}  >  <span> Add to cart </span> <BsCart2 stroke-width='0.5' size={18} /> </p>
                        </div>
                    </main>

                    <main  >
                        <p className="mb-3" ><b>Categories:</b><span className=" text-blue-500 cursor-pointer text-sm   " onClick={() => Navigate(`/viewcategoryproducts/${filteredcategory?._id}`)}> {filteredcategory?.name}</span></p>
                        <section className="flex justify-start items-center gap-3 ">
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
            </main >

            <main className='my-16'>

                <section className='flex items-center gap-4 '>
                    <p className=' text-xl   cursor-pointer font-bold   text-black transition-all ease-in hover:duration-100 '>Description</p>
                    {/* <p className=' text-xl   cursor-pointer font-bold   text-gray-400 hover:text-black transition-all ease-in hover:delay-50 delay-70 '>Specification</p> */}
                    {/* <p className=' text-xl   cursor-pointer font-bold   text-gray-400 hover:text-black transition-all ease-in hover:delay-50 delay-70 '>Aditional Information</p> */}
                    <p className=' text-xl   cursor-pointer font-bold   text-gray-400 hover:text-black transition-all ease-in hover:delay-50 delay-70 '>Reviews</p>
                </section>
                <hr className='my-3' />
                <p className=' leading-7  text-lg text-justify  '> {filteredProduct?.description} </p>


            </main>




        </>
    );
};

export default SingleProductContainer;
