/* eslint-disable react/prop-types */
import { BsArrowRightShort } from 'react-icons/bs';
import { VscHeart } from 'react-icons/vsc';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import '../../assets/styles/NewProducts.scss';
// import { TbGitCompare } from 'react-icons/tb';
// import { AiOutlineEye } from 'react-icons/ai';

const NewProducts = ({ title, Banner, grid, discount }) => {
    const items = Array.from({ length: 8 }, (_, index) => (
        <article key={index} className='cursor-pointer Parent-Col-Hover  '>
            <section className='flex justify-center items-center mb-3 rounded-xl p-4 relative bg-gray-100  border'>
                {discount &&
                    <div className='md:top-[0.80rem] top-[0.40rem] md:right-5  mr-[70px]  rounded-full  bg-green-400 md:px-3 px-2 absolute z-10'>
                        53%
                    </div>
                }

                <div className='md:top-[0.80rem] top-[0.30rem] md:right-5  ml-[86px]   border border-gray-300 hover:bg-red-100 rounded-full  p-[0.35rem] absolute  cursor-pointer z-10'>
                    <VscHeart size={19} />
                </div>
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
    ));
    return (
        <>
            <main className=' md:mt-0 mt-6'>
                <section className="flex justify-between items-center mb-3">
                    <p className="text-2xl font-extrabold whitespace-nowrap">{title}</p>
                    <p className="text-sm cursor-pointer  text-blue-500 flex gap-1 items-center whitespace-nowrap">View more < BsArrowRightShort size={20} /></p>
                </section>
                <hr />
                <section className={`my-6 grid ${grid} gap-8 `}>
                    {items}
                </section>
                {Banner &&
                    <section className='mt-8 relative'>
                        <div className='text-black absolute md:top-6 top-4 md:left-10  z-10  p-2'>
                            <div className='flex'>
                                <p className='md:px-4 px-3 md:py-1 text-sm items-center bg-yellow-500 rounded-full md:block hidden'>Headphones </p>
                            </div>
                            <div className='mt-3 '>
                                <h1 className='md:text-2xl text-lg font-extralight leading-6 md:block hidden'>Immerse Yourself in Pure Sound</h1>
                                <h1 className='md:text-4xl text-2xl font-extrabold leading-6'>Discover Premium Headphones</h1>
                            </div>
                            <button className='px-4 py-1 text-white text-sm font-semibold rounded-full bg-blue-500 mt-2'>
                                <b>Shop now</b>
                            </button>
                        </div>
                        <div className='md:h-full h-[150px]'>
                            <img src="https://res.cloudinary.com/denajbnh4/image/upload/v1694938129/banner-4_uoyebo.jpg" className='object-cover w-full h-full' alt="" />
                        </div>


                    </section>
                }


            </main>




        </>
    )
}

export default NewProducts

{/* <div className=' border border-gray rounded-full p-[0.35rem] absolute top-3 left-18 cursor-pointer z-10'>
                            <TbGitCompare size={18} />
                        </div>
                        <div className=' border border-black rounded-full p-1 absolute top-3   left-44  cursor-pointer z-10'>
                            <AiOutlineEye size={20} />
                        </div> */}