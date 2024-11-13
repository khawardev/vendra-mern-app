/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import '../../../assets/styles/AdminCategoryProducts.scss';
import { VscHeart } from 'react-icons/vsc';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../toolkit/Slices/ProductsSlice'
import BackgroundRemoval from '../../../pages/BackgroundRemoval';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../toolkit/Slices/CartSlice';
import { addToWishlist } from '../../../toolkit/Slices/WishlistSlice';
import { useState, useEffect } from 'react';
import { HiOutlineCheck } from "react-icons/hi";
import toast from 'react-hot-toast';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import StarRatingAvg from '../../SingleProductContainer/StarRatingAvg'
import { selectReviews } from '../../../toolkit/Slices/ReviewSlice';
import { addToExchange, selectExchangeRate } from '../../../toolkit/Slices/CompareSlice';
import { selectdiscount } from '../../../toolkit/Slices/DicountSlice'
import { selectbestSelling } from '../../../toolkit/Slices/BestSellingSlice'


const NewProductsNestedSection = ({ sliceProducts, grid }) => {

    const reviews = useSelector(selectReviews);
    const ExchangeRate = useSelector(selectExchangeRate);

    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const discount = useSelector(selectdiscount);
    const products = useSelector(selectProducts);
    const bestSelling = useSelector(selectbestSelling);
    const [wishlistTragetid, setwishlistTragetid] = useState();
    const [cartTragetid, setcartTragetid] = useState();
    const [wishlistloading, setwishlistloading] = useState(false);
    const [cartloading, setcartloading] = useState(false);

    const discountedProductIds = discount.map(item => item.id);
    const bestSellingProductIds = bestSelling.map(item => item.id);
    const discountedProducts = products.filter(product => !discountedProductIds.includes(product._id));
    const bestSellingProducts = discountedProducts.filter(product => !bestSellingProductIds.includes(product._id));


    console.log(products, 'productsproductsproducts')

    const handleAddToWishList = (id, name, desc, price, imageurl, quantity) => {
        toast.success(<span style={{ fontWeight: 'bold' }}>Added to wishlist</span>);

        dispatch(addToWishlist({ id: id, name: name, desc: desc, price: price, imageurl: imageurl, quantity: quantity }));
        setwishlistloading(true);
    };
    const handleAddToCart = (id, name, desc, price, imageurl, quantity) => {
        toast.success(<span style={{ fontWeight: 'bold' }}>Added to cart</span>);
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


    const displayedProducts = Array.isArray(products)
        ? (sliceProducts ? [...products.slice(-8)] : [...products]).reverse()
        : [];



    return (
        <>
            {bestSellingProducts &&
                <div className={`my-7 grid  gap-7 ${grid}`}>

                    {bestSellingProducts?.slice(-8).reverse()?.map((product) => (
                        <div key={product._id} className={`cursor-pointer   select-none flex flex-col justify-between  Parent-Col-Hover relative`}>
                            <main>
                                <div>

                                    <div onClick={() => {
                                        handleAddToWishList(
                                            product._id,
                                            product.name,
                                            product.description,
                                            product.price,
                                            product.image,
                                            1
                                        );
                                        setwishlistTragetid(product._id);
                                    }} className='md:top-[0.80rem] top-[0.30rem] md:right-[15px] right-[10px]   bg-gray-300 hover:bg-gray-200 rounded-full  p-[0.40rem] absolute  cursor-pointer z-10'>
                                        {wishlistloading && wishlistTragetid == product._id ? (
                                            <HiOutlineCheck size={20} />
                                        ) : (
                                            <VscHeart size={20} />
                                        )}
                                    </div>
                                </div>

                                <section className={`  relative    Parent-product-Image-Hover  `} onClick={() => Navigate(`/viewsingleproduct/${product?._id}/${false}/${false}/newProduct`)}>
                                    {/* <BackgroundRemoval Imageurl={`https://ucarecdn.com/${product?.image}/`} /> */}
                                    <img className='mix-blend-multiply flex  w-full ' src={`https://ucarecdn.com/${product?.image[0]}/-/scale_crop/500x500/`} alt="" />
                                    <span className=' md:leading-5 mb-2 mt-4   leading-5 line-clamp-2   md:text-lg font-bold   hover:cursor-pointer hover:underline  Parent-product-text-Hover  capitalize  '>{product.name}</span>
                                    <p className='  mb-3  line-clamp-2   hover:cursor-pointer  text-gray-400  leading-5   tracking-tight   '>{product.description}</p>
                                </section>

                            </main>
                            <main  >
                                <span className='flex items-center gap-1 mt-2 '>
                                    <StarRatingAvg reviews={reviews.flat().filter(review => review.productid === product?._id)} />
                                </span>
                                <div className='flex justify-between items-center '>

                                    <p className=' text-gray-800 font-extrabold font-price'><span className=' text-sm'>{ExchangeRate ? ExchangeRate.code : 'USD'}</span> <span className=' text-xl'> {ExchangeRate ? (ExchangeRate.value * product.price).toFixed(0) : product.price}</span>   </p>

                                    <div onClick={() => {
                                        handleAddToCart(
                                            product?._id,
                                            product?.name,
                                            product?.description,
                                            product?.price,
                                            product?.image,
                                            1
                                        );
                                        setcartTragetid(product._id);
                                    }} className='p-2 rounded-lg border hover:bg-gray-100 cursor-pointer'>

                                        {cartloading && cartTragetid == product._id ? (
                                            < HiOutlineCheck size={20} />
                                        ) : (
                                            <BsCart2 size={20} />
                                        )}
                                    </div>

                                </div>

                            </main>
                        </div>
                    ))}
                </div>

            }


        </>
    );
};

export default NewProductsNestedSection


{/* <div onClick={() => {
                    handleAddToWishList(
                        product?._id,
                        product?.name,
                        product?.description,
                        product?.price,
                        product?.image,
                        1
                    );
                


                }} className='md:top-[0.80rem] top-[0.30rem] md:right-[15px] right-[10px] border-4 border-gray-100  bg-gray-300 hover:bg-gray-200 rounded-full  p-[0.40rem] absolute  cursor-pointer z-10'>

                    {showCheckmark ? (
                        <HiOutlineCheck className='text-blue-500' size={20} />
                    ) :
                        loading ? (
                            <>
                                <div className="animate-spin w-[20px] h-[20px] p-2 border-[2px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                                    role="status"
                                    aria-label="loading">
                                </div>

                            </>
                        ) : (
                            <VscHeart size={20} />
                        )}

                </div> */}