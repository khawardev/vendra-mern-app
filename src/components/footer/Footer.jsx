import { SlSocialFacebook } from 'react-icons/sl';
import { RiTwitterXFill } from 'react-icons/ri';
import { FiLinkedin } from 'react-icons/fi';
import { SlSocialPintarest } from 'react-icons/sl';
import { BsInstagram } from 'react-icons/bs';
import logo from '../../assets/images/logo.png';
// import { GoDotFill } from 'react-icons/go';

const Footer = () => {
    // const items = Array.from({ length: 4 }, (_, index) => (
    //     <section key={index} >
    //         <p className=" mb-4 font-extrabold">Make Money with Us</p>
    //         <li className=" list-none ">
    //             <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Home</span> <br />
    //             <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Shop</span><br />
    //             <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> About</span><br />
    //             <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Contact</span><br />
    //         </li>

    //     </section>
    // ));
    return (
        <>
            <main className=" bg-[#041E42] ">
                <div className="w-11/12 m-auto md:flex  justify-between items-center md:px-28 md:pb-5 md:pt-28 py-8 ">
                    <section className=' md:text-start text-center md:mb-0 mb-4'>
                        <p className=" font-extrabold text-white text-2xl  ">
                            Sign Up For Newsletters
                        </p>
                        <p className=" text-slate-300">Get E-mail updates about our latest shops  <span className=" text-yellow-300"> special offers. </span> </p>
                    </section>
                    <section className="flex justify-center items-center gap-2 ">
                        <div>
                            <input type="text" className="py-3 outline-none border-none px-7  rounded-full w-full" placeholder='Your email address' />
                        </div>
                        <div>
                            <button className="py-3 px-6 flex rounded-full  bg-yellow-500 whitespace-nowrap font-bold   text-[#041E42] ">Sign up</button>
                        </div>
                    </section>
                </div>
            </main>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195">
                <rect width="100%" height="100%" fill="#F7F8F9" />
                <path fill="#041e42" fillOpacity="1" d="M0,192L80,170.7C160,149,320,107,480,80C640,53,800,43,960,42.7C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>

            <main className=" pt-16 pb-20 bg-[#F7F8F9]">
                <div className="w-11/12 m-auto">
                    <section className="grid grid-cols-6 gap-10   whitespace-nowrap justify-between items-end" >
                        <section className='  col-span-1'  >
                            <p className=" mb-4 font-extrabold">Vendra Pages</p>
                            <li className=" list-none ">
                                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Home</span> <br />
                                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Shop</span><br />
                                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> About</span><br />
                                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Contact</span><br />
                                {/* <GoDotFill size={10} className='my-3 ' /> */}
                                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Cart</span> <br />
                                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Whishlist</span><br />
                                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Compare</span><br />
                                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Discount</span><br />
                                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Best Selling</span><br />
                            </li>
                        </section>

                        
                        <main className='w-full col-span-5' >
                            <main className="md:flex md:justify-between text-center items-center ">
                                <section className=' flex gap-1 items-center '>
                                    <img src={logo} width={35} />
                                    <p className='text-4xl font-extrabold  '>Vendra<sup className=' font-light text-sm'> &reg; </sup></p>

                                </section>

                                <section className="flex justify-center items-center gap-3 md:mt-0 mt-4">
                                    <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                                        <SlSocialFacebook size={20} />
                                    </div>
                                    <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                                        <RiTwitterXFill size={20} />
                                    </div>
                                    <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                                        <FiLinkedin size={20} />
                                    </div>
                                    <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                                        <SlSocialPintarest size={20} />
                                    </div>
                                    <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                                        <BsInstagram size={20} />
                                    </div>
                                </section>
                            </main>
                            <hr className='my-6' />
                            <main className="flex justify-between items-center md:flex-row  flex-col-reverse ">
                                <section className='text-sm md:mt-0 mt-4 flex items-center gap-2' >

                                    © Copyright 2023 All Right Reserved
                                    <span className=" text-[#FFC21F]   "><b>Vendra</b><sup className=' font-light text-sm'> &reg; </sup></span>

                                </section>
                                <section>
                                    <img src="https://res.cloudinary.com/denajbnh4/image/upload/v1694950874/payment_mbisbh.png" alt="" />
                                </section>
                            </main>
                        </main>


                    </section>

                </div>
            </main>

            {/* <main className="w-11/12 m-auto md:my-16 my-10">
                <main className="md:flex md:justify-between text-center items-center ">
                    <section className=' flex gap-1 items-center '>
                        <img src={logo} width={35} />
                        <p className='text-4xl font-extrabold  '>Vendra<sup className=' font-light text-sm'> &reg; </sup></p>

                    </section>

                    <section className="flex justify-center items-center gap-3 md:mt-0 mt-4">
                        <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                            <SlSocialFacebook size={20} />
                        </div>
                        <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                            <RiTwitterXFill size={20} />
                        </div>
                        <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                            <FiLinkedin size={20} />
                        </div>
                        <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                            <SlSocialPintarest size={20} />
                        </div>
                        <div className='p-2  bg-slate-200 rounded-full cursor-pointer'>
                            <BsInstagram size={20} />
                        </div>
                    </section>
                </main>
                <hr className='my-6' />
                <main className="flex justify-between items-center md:flex-row  flex-col-reverse ">
                    <section className='text-sm md:mt-0 mt-4 flex items-center gap-2' >

                        © Copyright 2023 All Right Reserved
                            <span className=" text-[#FFC21F]   "><b>Vendra</b><sup className=' font-light text-sm'> &reg; </sup></span>

                    </section>
                    <section>
                        <img src="https://res.cloudinary.com/denajbnh4/image/upload/v1694950874/payment_mbisbh.png" alt="" />
                    </section>
                </main>
            </main> */}

        </>
    )
}

export default Footer