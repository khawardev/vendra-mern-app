
/* eslint-disable react/prop-types */
import { VscHeart } from 'react-icons/vsc';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import axios from 'axios';
const NewProductsNestedSection = ({ discount }) => {
    const [products, setProducts] = useState([]);
    console.log(products)

    useEffect(() => {
        // Fetch product data from your backend API when the component mounts
        axios.get('http://localhost:5000/api/products') // Update the URL to match your backend route
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []); // The 
    return (
        <>

            {products.slice().reverse().map((product) => (
                <article key={product._id} className="cursor-pointer Parent-Col-Hover relative">
                    <div>
                        {discount &&
                            <div className='md:top-[1rem] top-[0.40rem]  md:left-[15px] left-[10px]  rounded-full   rounded-tr-full  bg-green-400 md:px-3 px-2 absolute z-10'>
                                53%
                            </div>
                        }
                        <div className='md:top-[0.80rem] top-[0.30rem] md:right-[15px] right-[10px] border border-gray-300 hover:bg-red-100 rounded-full  p-[0.35rem] absolute  cursor-pointer z-10'>
                            <VscHeart size={19} />
                        </div>
                    </div>

                    <section className='flex justify-center items-center  mb-3 rounded-xl p-4 relative bg-gray-100  border'>
                        <div className='Parent-product-Image-Hover '>
                            <img className='mix-blend-multiply ' src="https://res.cloudinary.com/denajbnh4/image/upload/v1694863601/category-1_w0bkdb.jpg" alt="" />
                        </div>
                    </section>
                    <main className=' flex flex-col justify-between' >
                        <div className='upper'>
                            <span className=' md:leading-5 mb-2 text-lg leading-5 line-clamp-2 font-bold   hover:cursor-pointer hover:underline  Parent-product-text-Hover  capitalize  '>{product.name}</span>
                            <p className=' md:leading-5 leading-4 mb-3  line-clamp-3  hover:cursor-pointer  '>{product.description}</p>
                        </div>
                        <div className='lower'>
                            <div className='flex justify-between items-center '>
                                {discount ?
                                    <div className='md:flex justify-center items-center gap-4 '>
                                        <p className='  text-sm text-gray-800 line-through '>$732.00</p>
                                        <p className=' text-lg text-gray-800 font-extrabold font-price leading-5'>${product.price}</p>
                                    </div>
                                    :
                                    <p className=' text-lg text-gray-800 font-extrabold font-price'>${product.price}</p>

                                }
                                <div className='p-2 rounded-lg border hover:bg-yellow-100 cursor-pointer'>
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
                        </div>

                    </main>
                </article>
            ))}

        </>
    );
};

export default NewProductsNestedSection