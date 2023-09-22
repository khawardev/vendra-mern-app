/* eslint-disable react/prop-types */
import { VscHeart } from 'react-icons/vsc';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
const NewProductsNestedSection = ({ discount }) => {
    return (
        <>


            <article className='cursor-pointer Parent-Col-Hover relative  '>
                <div>
                    {discount &&
                        <div className='md:top-[1rem] top-[0.40rem]  md:left-[15px] left-[10px] rounded-full  bg-green-400 md:px-3 px-2 absolute z-10'>
                            53%
                        </div>
                    }
                    <div className='md:top-[0.80rem] top-[0.30rem] md:right-[15px] right-[10px] border border-gray-300 hover:bg-red-100 rounded-full  p-[0.35rem] absolute  cursor-pointer z-10'>
                        <VscHeart size={19} />
                    </div>
                </div>
               
                <section className='flex justify-center items-center  mb-3 rounded-xl p-4 relative bg-gray-100  border'>
                    {/* {discount &&
                      <div className='md:top-[1rem] top-[0.40rem]  left-[10px] rounded-full  bg-green-400 md:px-3 px-2 absolute z-10'>
                          53%
                      </div>
                  } */}

                  
                    <div className='Parent-product-Image-Hover '>
                        <img className='mix-blend-multiply ' src="https://res.cloudinary.com/denajbnh4/image/upload/v1694863601/category-1_w0bkdb.jpg" alt="" />
                    </div>
                </section>
                <main >
                    <p className=' md:leading-6 leading-5 mb-2 line-clamp-2  hover:cursor-pointer hover:underline  hover:text-blue-600 '>Apple 13.3 inch MacBook Pro 1.4GHz i5 Quad-Core</p>
                    <span className='flex items-center gap-1  mb-2'>
                        <AiFillStar className=' text-yellow-400 ' size={18} />
                        <AiFillStar className=' text-yellow-400' size={18} />
                        <AiFillStar className=' text-yellow-400' size={18} />
                        <AiFillStar className=' text-yellow-400' size={18} />
                        <AiOutlineStar className=' text-gray-300' size={18} />
                    </span>
                    <section className='flex justify-between items-center'>
                        {discount ?
                            <div>
                                <p className=' text-sm text-gray-800 line-through'>$732.00</p>
                                <p className=' text-lg text-gray-800 font-extrabold font-price'>$344.00</p>
                            </div>
                            :
                            <p className=' text-lg text-gray-800 font-extrabold font-price'>$744.00</p>

                        }
                        <div className='p-2 rounded-lg border hover:bg-yellow-100 cursor-pointer'>
                            <BsCart2 size={18} />
                        </div>
                    </section>
                </main>
            </article>
        </>
    )
}

export default NewProductsNestedSection