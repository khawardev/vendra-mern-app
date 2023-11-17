
/* eslint-disable react/prop-types */
import { VscHeart } from 'react-icons/vsc';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const CategoryProductsNestedSection = ({ filteredProducts }) => {
    const Navigate = useNavigate();

    return (
        <>
            {filteredProducts?.map((product) => (
                <article key={product._id} className="cursor-pointer  flex flex-col justify-between  Parent-Col-Hover relative" onClick={() => Navigate(`/viewsingleproduct/${product?._id}`)}>
                    <main>
                        <div>

                            <div className='md:top-[0.80rem] top-[0.30rem] md:right-[15px] right-[10px] border-4 border-gray-100  bg-gray-300 hover:bg-gray-200 rounded-full  p-[0.35rem] absolute  cursor-pointer z-10'>
                                <VscHeart className='  font-bold ' size={19} />
                            </div>
                        </div>

                        <section className='    mb-3 rounded-xl p-8 relative bg-gray-100   flex justify-center items-center  border'>
                            <div className='Parent-product-Image-Hover   '>
                                <img className='mix-blend-multiply   h-[11rem] ' src={`https://ucarecdn.com/${product?.image}/`} alt="" />
                            </div>
                        </section>
                        <div className='upper'>
                            <span className=' md:leading-5 mb-3 text-lg leading-5 line-clamp-2 font-bold   hover:cursor-pointer hover:underline  Parent-product-text-Hover  capitalize  '>{product.name}</span>
                            <p className=' md:leading-5 leading-4 mb-3  line-clamp-3  hover:cursor-pointer  '>{product.description}</p>
                        </div>
                    </main>

                    <main  >

                        <div className='flex justify-between items-center '>
                            <p className=' text-lg text-gray-800 font-extrabold font-price'>${product.price}</p>

                            <div className='p-2 rounded-lg border hover:bg-gray-100 cursor-pointer'>
                                <BsCart2 size={18} />
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

        </>
    )
}

export default CategoryProductsNestedSection