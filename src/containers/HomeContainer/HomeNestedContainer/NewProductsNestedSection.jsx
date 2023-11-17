
/* eslint-disable react/prop-types */
import { VscHeart } from 'react-icons/vsc';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewProductsNestedSection = ({ discount }) => {
    const Navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/products') // Update the URL to match your backend route
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);
    return (
        <>

            {products.slice(-8).reverse().map((product) => (
                <article key={product._id} onClick={() => Navigate(`/viewsingleproduct/${product?._id}`)} className="cursor-pointer  flex flex-col justify-between  Parent-Col-Hover relative">
                    <main>
                        <div>
                            {discount &&
                                <div className='md:top-[1rem] top-[0.40rem]  md:left-[15px] left-[10px]  rounded-full   rounded-tr-full border-4 border-gray-100    bg-green-300 md:px-3 px-2 absolute z-10'>
                                    53%
                                </div>
                            }
                            <div className='md:top-[0.80rem] top-[0.30rem] md:right-[15px] right-[10px] border-4 border-gray-100  bg-gray-300 hover:bg-gray-200 rounded-full  p-[0.35rem] absolute  cursor-pointer z-10'>
                                <VscHeart className='  font-bold ' size={19} />
                            </div>
                        </div>

                        <section className='    mb-3 rounded-xl p-8 relative bg-gray-100   flex justify-center items-center  border'>
                            <div className='Parent-product-Image-Hover   '>
                                <img className='mix-blend-multiply   h-[10rem] ' src={`https://ucarecdn.com/${product?.image}/`} alt="" />
                            </div>
                        </section>
                        <div className='upper'>
                            <span className=' md:leading-5 mb-3 text-lg leading-5 line-clamp-2 font-bold   hover:cursor-pointer hover:underline  Parent-product-text-Hover  capitalize  '>{product.name}</span>
                            <p className=' md:leading-5 leading-4 mb-3  line-clamp-3  hover:cursor-pointer  '>{product.description}</p>
                        </div>
                    </main>

                    <main  >

                        <div className='flex justify-between items-center '>
                            {discount ?
                                <div className='md:flex justify-center items-center gap-2 '>
                                    <p className=' text-lg text-gray-800 font-extrabold font-price leading-5'>${product.price}</p>
                                    <p className='  text-sm  line-through font-bold text-red-500 '>$732.00</p>
                                </div>
                                :
                                <p className=' text-lg text-gray-800 font-extrabold font-price'>${product.price}</p>

                            }
                            <div className='p-2 rounded-lg border hover:bg-gray-100 cursor-pointer'>
                                <BsCart2 size={18} />
                            </div>
                        </div>
                        <span className='flex items-center gap-1  mb-2'>
                            <AiFillStar className=' text-yellow-400 ' size={18} />
                            <AiFillStar className=' text-yellow-400' size={18} />
                            <AiFillStar className=' text-yellow-400' size={18} />
                            <AiFillStar className=' text-yellow-400' size={18} />
                            <AiOutlineStar className=' text-gray-300' size={18} />
                        </span>
                    </main>
                </article>
            ))}

        </>
    );
};

export default NewProductsNestedSection