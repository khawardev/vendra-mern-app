/* eslint-disable react/prop-types */
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addToWishlist } from '../../../toolkit/Slices/WishlistSlice';
import { addToCart } from '../../../toolkit/Slices/CartSlice';
import StarRatingAvg from '../../SingleProductContainer/StarRatingAvg'
import { HiOutlineCheck } from "react-icons/hi";
import { VscHeart } from 'react-icons/vsc';
import { selectReviews } from '../../../toolkit/Slices/ReviewSlice';
import { selectExchangeRate } from '../../../toolkit/Slices/CompareSlice';
import { useNavigate } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';

const BestSell2Nested = ({ product }) => {
    const dispatch = useDispatch();
    const [wishlistloading, setwishlistloading] = useState(false);
    const [cartloading, setcartloading] = useState(false);
    const reviews = useSelector(selectReviews);
    const ExchangeRate = useSelector(selectExchangeRate);
    const Navigate = useNavigate();


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
    const [wishlistTragetid, setwishlistTragetid] = useState();
    const [cartTragetid, setcartTragetid] = useState();
    return (


        <>
                <div>
                    <div className='md:top-[-1rem]  top-[0.20rem]    md:right-[-10px]   absolute z-10'>
                        <img src="   https://cdn-icons-png.flaticon.com/512/4715/4715576.png " className=' w-[36px]' alt="" />
                    </div>

                    <div onClick={() => {
                        handleAddToWishList(
                            product.id,
                            product.name,
                            product.desc,
                            product.price,
                            product.imageurl,
                            1
                        );
                        setwishlistTragetid(product.id);
                    }} className='md:top-[14.5rem] top-[10.80rem] md:right-[10px] right-[10px]    bg-gray-300 hover:bg-gray-200 rounded-full  p-[0.40rem] absolute  cursor-pointer z-10'>
                        {wishlistloading && wishlistTragetid == product.id ? (
                            <HiOutlineCheck size={20} />
                        ) : (
                            <VscHeart size={20} />
                        )}
                    </div>

                </div>

                <section className={` rounded-2xl  relative    Parent-product-Image-Hover  `} onClick={() => Navigate(`/viewsingleproduct/${product?.id}/${true}/${false}/bestSell`)}>
                    <img className='mix-blend-multiply flex rounded-xl w-full ' src={`https://ucarecdn.com/${product?.imageurl[0]}/-/scale_crop/500x500/`} alt="" />
                </section>


                <div className='upper  mt-4  ' onClick={() => Navigate(`/viewsingleproduct/${product?.id}/${true}/${false}/bestSell`)}>
                    <span className=' md:leading-5 mb-3  text-lg leading-5 line-clamp-2 font-bold     hover:cursor-pointer hover:underline   Parent-product-text-Hover  capitalize  '>{product.name}</span>
                    <p className=' md:leading-5  leading-5 mb-3  line-clamp-3  hover:cursor-pointer  text-gray-400  '>{product.desc}</p>
                </div>


                <span className='flex items-center gap-1  mt-2'>
                    <StarRatingAvg reviews={reviews.flat().filter(review => review.productid === product?.id)} />
                </span>
                <div className='flex justify-between items-center '>
                    <div className='md:flex justify-center items-center gap-2 '>
                        <p className=' text-gray-800 font-extrabold font-price'><span className=' text-sm'>{ExchangeRate ? ExchangeRate.code : 'USD'}</span> <span className=' text-xl'> {ExchangeRate ? (ExchangeRate.value * product.price).toFixed(0) : product.price}</span>   </p>

                        {/* <p className=' text-lg text-gray-800 font-extrabold font-price leading-5'>${product.price}</p> */}
                    </div>

                    <div onClick={() => {
                        handleAddToCart(
                            product?.id,
                            product?.name,
                            product?.desc,
                            product?.price,
                            product?.imageurl,
                            1
                        );
                        setcartTragetid(product._id);
                    }} className='p-2 rounded-lg border hover:bg-gray-100 cursor-pointer'>

                        {cartloading && cartTragetid == product.id ? (
                            < HiOutlineCheck size={20} />
                        ) : (
                            <BsCart2 size={20} />
                        )}
                    </div>
                </div>

        
        </>
  
    )
}

export default BestSell2Nested