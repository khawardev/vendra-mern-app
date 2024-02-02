/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import { VscHeart } from 'react-icons/vsc';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../toolkit/Slices/ProductsSlice'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../toolkit/Slices/CartSlice';
import { addToWishlist } from '../../../toolkit/Slices/WishlistSlice';
import { useState, useEffect } from 'react';
import { HiOutlineCheck } from "react-icons/hi";
import { IoMdArrowForward } from "react-icons/io";

import { MdOutlineErrorOutline } from "react-icons/md";

const CategoryProductsNestedSection = ({ filteredProducts, grid }) => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const [wishlistTragetid, setwishlistTragetid] = useState();
    const [cartTragetid, setcartTragetid] = useState();
    const [wishlistloading, setwishlistloading] = useState(false);
    const [cartloading, setcartloading] = useState(false);

    const handleAddToWishList = (id, name, desc, price, imageurl, quantity) => {
        dispatch(addToWishlist({ id: id, name: name, desc: desc, price: price, imageurl: imageurl, quantity: quantity }));
        setwishlistloading(true);
    };
    const handleAddToCart = (id, name, desc, price, imageurl, quantity) => {
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

    return (
        <>

            {filteredProducts?.length !== 0 ? (
                <div className={`my-7 grid  gap-7 ${grid}`}>
                    {filteredProducts?.map((product) => (
                        <article key={product._id} className="cursor-pointer  flex flex-col justify-between  Parent-Col-Hover relative" >
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
                                    }} className='md:top-[0.80rem] top-[0.30rem] md:right-[15px] right-[10px] border-4 border-gray-100  bg-gray-300 hover:bg-gray-200 rounded-full  p-[0.40rem] absolute  cursor-pointer z-10'>
                                        {wishlistloading && wishlistTragetid == product._id ? (
                                            <HiOutlineCheck size={20} />
                                        ) : (
                                            <VscHeart size={20} />
                                        )}
                                    </div>
                                </div>
                                <section onClick={() => Navigate(`/viewsingleproduct/${product?._id}/${false}/${false}/newProduct`)}>
                                    <section className='    mb-3 rounded-xl p-8 relative bg-gray-100   flex justify-center items-center  border'>
                                        <div className='Parent-product-Image-Hover   '>
                                            <img className='mix-blend-multiply   h-[11rem] ' src={`https://ucarecdn.com/${product?.image}/`} alt="" />
                                        </div>
                                    </section>
                                    <div className='upper'>
                                        <span className=' md:leading-5 italic mb-3 text-lg leading-5 line-clamp-2 font-bold     hover:cursor-pointer hover:underline  Parent-product-text-Hover  capitalize  '>{product.name}</span>
                                        <p className='md:leading-[18px] italic  leading-4 mb-3  line-clamp-3  hover:cursor-pointer  text-gray-400 '>{product.description}</p>
                                    </div>
                                </section>
                            </main>
                            <main  >

                                <div className='flex justify-between items-center '>
                                    <p className=' text-lg text-gray-800 font-extrabold font-price'>${product.price}</p>

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
                                <span className='flex items-center gap-1  mb-2'>
                                    <AiFillStar className=' text-yellow-400' size={18} />
                                    <AiFillStar className=' text-yellow-400' size={18} />
                                    <AiFillStar className=' text-yellow-400' size={18} />
                                    <AiFillStar className=' text-yellow-400' size={18} />
                                    <AiOutlineStar className=' text-gray-300' size={18} />
                                </span>
                            </main>
                        </article>
                    ))}
                </div>
            ) : (

                <div >
                    <div className='  pb-28 pt-24 justify-center items-center flex flex-col gap-3'>
                        <MdOutlineErrorOutline size={130} className=' mb-3  opacity-10' />
                        <span className=' font-bold  ' >No Product In Category  </span>
                        <p className=" cursor-pointer text-indigo-700 flex items-center  font-bold   bg-indigo-100 gap-2  transition-all ease-in px-4 py-2 rounded-full"
                            onClick={() => Navigate('/')}  >go back <IoMdArrowForward className=' opacity-100' size={16} /></p>
                    </div>
                </div>

            )

            }


        </>
    )
}

export default CategoryProductsNestedSection