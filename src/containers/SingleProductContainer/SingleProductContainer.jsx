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
import { FiPlus } from "react-icons/fi";
import ReviewsModal from '../SingleProductContainer/ReviewsModal';
import LightBox from '../../components/WebScrapper/Lightbox';
import { selectReviews } from '../../toolkit/Slices/ReviewSlice';
import StarRatingProduct from './StarRatingProduct'
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineErrorOutline } from "react-icons/md";
import StarRatingAvg from './StarRatingAvg'
import { CiDiscount1 } from 'react-icons/ci';
import fire from '../../assets/images/fire.svg'
import { useContext } from 'react'
import { Context } from "../../context/AppContext";
import { selectExchangeRate } from '../../toolkit/Slices/CompareSlice';

const SingleProductContainer = ({ productid, filteredProduct, filteredcategory, BestSell, Discount, DiscountedPrice }) => {
    const ExchangeRate = useSelector(selectExchangeRate);

    const [reviews, setReviews] = useState([]);
    console.log(reviews)
    const { isReviewload } = useContext(Context);
    const toolkitreviews = useSelector(selectReviews);
    console.log(toolkitreviews.flat())

    const dispatch = useDispatch();
    const comparedProducts = useSelector(selectCompare);

    const Navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [isProductCompared, setisProductCompared] = useState(false);


    useEffect(() => {
        const fetchReviews = async () => {
            try {

                //    const response = await fetch(`http://localhost:5000/api/reviews/${filteredProduct.id}`);
                const response = await fetch(`http://localhost:5000/api/reviews/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();
                setReviews(data); // Set the fetched reviews in state
            } catch (error) {
                console.error('Error fetching reviews:', error);
                // Handle error, maybe show an error message to the user
            }
        };
        fetchReviews();
        // Call fetchReviews when component mounts to fetch initial reviews
    }, [isReviewload === true]);


    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const handleAddToCart = (DiscountedPrice) => {
        toast.success(
            <div style={{ display: 'flex' }}>
                <span style={{ fontWeight: 'bold' }}>Added to cart </span>
            </div>
        );
        dispatch(addToCart({ id: filteredProduct._id, name: filteredProduct.name, desc: filteredProduct.description, price: DiscountedPrice ? DiscountedPrice : filteredProduct.price, imageurl: filteredProduct.image, quantity: quantity }));
        setQuantity(1); // Reset quantity after adding to cart
    };
    const handleAddToWishList = (DiscountedPrice) => {
        toast.success(<span style={{ fontWeight: 'bold' }}>Added to wishlist</span>);
        dispatch(addToWishlist({ id: filteredProduct._id, name: filteredProduct.name, desc: filteredProduct.description, price: DiscountedPrice ? DiscountedPrice : filteredProduct.price, imageurl: filteredProduct.image, quantity: quantity }));
    };


    useEffect(() => {
        const isCompared = comparedProducts.some(product => product.id === filteredProduct?._id);
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
        const toastMessage = isCompared ? 'Removed from Compare' : 'Added to Compare';
        toast.success(<span style={{ fontWeight: 'bold' }}>{toastMessage}</span>);

        dispatch(action);
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

    const [selectedOption, setSelectedOption] = useState('Description');
    const [Showmodal, setShowmodal] = useState(false);

    // const filteredReviews = toolkitreviews.flat().filter(review => review.productid === filteredProduct?._id);
    const filteredReviews = reviews.flat().filter(review => review.productid === filteredProduct?._id);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    };


    return (
        <>


            <p className=" text-sm mb-8"><span className=" text-gray-400"> <span className=' cursor-pointer' onClick={() => Navigate(`/`)}>Home</span> / <span className=' cursor-pointer' onClick={() => Navigate(`/viewcategoryproducts/${filteredcategory?._id}`)}> {filteredcategory?.name} </span>  /</span> <b>{Productname}</b>  </p>

            <main className=" grid grid-cols-4 md:gap-12 gap-4 mb-18   ">
                <section className='grid grid-cols-5 gap-6 md:col-span-2 col-span-4'>


                    <section className='md:flex hidden flex-col gap-5 col-span-1  '>
                        {filteredProduct?.image.map((imageUUID, index) => (
                            <img
                                key={index} // Make sure to use a unique key for each image
                                className='mix-blend-multiply flex justify-center items-center  cursor-pointer'
                                src={`https://ucarecdn.com/${imageUUID}/`} // Assuming imageUUID is the actual UUID of the image
                                alt={`Image ${index + 1}`} // Add alt text to improve accessibility
                                onClick={() => handleImageClick(imageUUID)} // Pass the imageUUID to the click handler
                            />
                        ))}
                    </section>

                    <section className='flex justify-start md:col-span-4 col-span-5'>
                        <div className='  '>
                            <LightBox zoomedImageSrc={zoomedImageSrc} filteredProduct={filteredProduct} />
                        </div>
                    </section>
                    <div className='md:hidden flex   col-span-5'>
                        <section className='   grid grid-cols-4 gap-2   '>
                            {filteredProduct?.image.map((imageUUID, index) => (
                                <img
                                    key={index} // Make sure to use a unique key for each image
                                    className='mix-blend-multiply flex justify-center border items-center cursor-pointer'
                                    src={`https://ucarecdn.com/${imageUUID}/`} // Assuming imageUUID is the actual UUID of the image
                                    alt={`Image ${index + 1}`} // Add alt text to improve accessibility
                                    onClick={() => handleImageClick(imageUUID)} // Pass the imageUUID to the click handler
                                />
                            ))}
                        </section>
                    </div>
                    
                </section>

                <section className=' flex flex-col justify-between  md:py-2 md:col-span-2 col-span-4 '>
                    <main className='mb-8'>
                        <p className=" md:text-3xl  md:leading-8  text-xl leading-6  font-bold      "> {filteredProduct?.name} </p>
                        <div className="md:my-8 my-4 flex items-center justify-between ">
                            <div className='flex items-center gap-3'>
                                {Discount === 'true' ?
                                    <>
                                        <p className=" text-3xl font-bold   text-red-500"> <span className=' text-sm'>{ExchangeRate ? ExchangeRate.code : 'USD'}</span> {ExchangeRate ? (ExchangeRate.value * DiscountedPrice).toFixed(0) : DiscountedPrice} </p>
                                        <p className=" text-xl    text-gray-300 line-through"> {ExchangeRate ? ExchangeRate.code : 'USD'}  {ExchangeRate ? (ExchangeRate.value * filteredProduct?.price).toFixed(0) : filteredProduct?.price}  </p>
                                    </>
                                    : <p className=" text-3xl font-bold   text-red-500"> <span className=' text-sm'>{ExchangeRate ? ExchangeRate.code : 'USD'}</span><span className=' '> {ExchangeRate ? (ExchangeRate.value * filteredProduct?.price).toFixed(0) : filteredProduct?.price}</span> </p>}
                            </div>
                            <section className='flex items-center gap-2'>
                                {Discount === 'true' && <div className='rounded-full flex items-center gap-1  text-green-800 bg-green-200  font-bold py-1  md:px-3 px-2 '>
                                    {calculateDiscountPercentage(filteredProduct?.price, DiscountedPrice)}%
                                </div>
                                }
                                {BestSell === 'true' && <div className='  flex  '>
                                    <img src="   https://cdn-icons-png.flaticon.com/512/4715/4715576.png " className=' w-[36px]' alt="" />
                                </div>
                                }

                            </section>
                        </div>
                        <div className='md:my-8 my-4 space-y-4 md:flex justify-between items-center'>

                            <span className=" select-none px-3  font-bold   bg-green-100 border rounded-full  border-green-300 text-green-700"> In Stock </span>
                            <div className='flex justify-between items-center gap-3'>
                                <span className='flex items-center gap-1'>
                                    <StarRatingAvg reviews={filteredReviews} />
                                </span>
                                {/* <p onClick={<ModalComponent />} className='font-bold    border px-2 py-1 rounded-full bg-gray-100 cursor-pointer flex gap-1 justify-center items-center '> <FiPlus stroke-width={3} /> Add Review</p> */}

                                {/* <p onClick={() => setShowmodal(!Showmodal)} className='font-bold border px-2 py-1 rounded-full bg-gray-100 cursor-pointer flex gap-1 justify-center items-center'>
                                    <FiPlus strokeWidth={3} /> Add Review
                                </p> */}
                                <ReviewsModal productid={filteredProduct?._id} />
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
                            </div>
                        </section>

                        <div className=" space-y-3 ">
                            <p onClick={() => { handleAddToWishList(Discount === 'true' && DiscountedPrice) }} className=" px-5 w-full py-2 border bg-blue-100  text-blue-600 font-bold   hover:border-blue-300  rounded-full  cursor-pointer flex  justify-center items-center gap-2">Wishlist  <FaRegHeart /></p>

                            <p className="px-5 py-2   w-full border bg-yellow-100  hover:border-yellow-300 text-yellow-600 font-bold    rounded-full  cursor-pointer flex justify-center items-center gap-2" onClick={() => {
                                handleAddToCart(Discount === 'true' && DiscountedPrice);
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
                <section className='flex items-center gap-4'>
                    <p
                        className={`text-xl cursor-pointer font-bold ${selectedOption === 'Description' ? 'text-black' : 'text-gray-400'} transition-all ease-in hover:duration-100`}
                        onClick={() => setSelectedOption('Description')}
                    >
                        Description
                    </p>
                    <p
                        className={`text-xl cursor-pointer font-bold ${selectedOption === 'Reviews' ? 'text-black' : 'text-gray-400'} transition-all ease-in hover:duration-100`}
                        onClick={() => setSelectedOption('Reviews')}
                    >
                        Reviews
                    </p>
                </section>

                <hr className='my-3' />

                {selectedOption === 'Description' ? (
                    <p className='leading-7 text-lg text-justify  tracking-tight leading-2'>
                        {filteredProduct?.description}
                    </p>
                ) : (
                    <ul>
                        {filteredReviews.length !== 0 ? (
                            <main className='grid md:grid-cols-2 gap-4'>
                                {filteredReviews.reverse().map(review => (
                                    <main key={review._id} className='flex gap-4 py-4 px-3 border-b'>
                                        <section>
                                            <img className='rounded-full' src="https://secure.gravatar.com/avatar/dd28514c9a8cfba334e05f21703be28e?s=60&d=mm&r=g" alt="" />
                                        </section>
                                        <div className='w-full'>
                                            <div className='flex items-center justify-between'>
                                                <span className='font-bold'>{review.name}</span>

                                                <span className='text-sm'>{formatDate(review.createdAt)}</span>
                                            </div>
                                            <div className='flex gap-4 font-bold'>
                                                <StarRatingProduct rating={review?.rating} />
                                            </div>
                                            <p>{review.review}</p>
                                        </div>
                                    </main>
                                ))}
                            </main>
                        ) : (
                            // If there are no reviews, display a message and an option to add a review
                            <div>
                                <div className='pb-28 pt-24 justify-center items-center flex flex-col gap-3'>
                                    <MdOutlineErrorOutline size={130} className='mb-3 opacity-10' />
                                    <span className='font-bold'>No Review</span>
                                    <ReviewsModal productid={filteredProduct._id} />
                                </div>
                            </div>
                        )}
                    </ul>
                )}

            </main>




        </>
    );
};

export default SingleProductContainer;
