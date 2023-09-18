import { SlSocialFacebook } from 'react-icons/sl';
import { RiTwitterXFill } from 'react-icons/ri';
import { FiLinkedin } from 'react-icons/fi';
import { SlSocialPintarest } from 'react-icons/sl';
import { BsInstagram } from 'react-icons/bs';
const Footer = () => {
    const items = Array.from({ length: 4 }, (_, index) => (
        <section key={index} >
            <p className=" mb-4 font-extrabold">Make Money with Us</p>
            <li className=" list-none ">
                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Sell on Machic</span> <br />
                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Sell Your Services on Machic</span><br />
                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Sell on Machic Business</span><br />
                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Sell Your Apps on Machic</span><br />
                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Become an Affilate</span><br />
                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Advertise Your Products</span ><br />
                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Sell - Publish with Us</span ><br />
                <span className=" cursor-pointer hover:underline opacity-60 hover:opacity-100"> Become an Machic Vendor</span ><br />
            </li>

        </section>
    ));
    return (
        <>
            <main className="mt-20  bg-[#041E42] ">
                <div className="w-11/12 m-auto md:flex  justify-between items-center md:px-28 md:pb-5 md:pt-28 py-8 ">
                    <section className=' md:text-start text-center md:mb-0 mb-4'>
                        <p className=" font-extrabold text-white text-2xl">
                            Sign Up For Newsletters
                        </p>
                        <p className=" text-slate-300">Get E-mail updates about our latest shops  <span className=" text-yellow-300"> special offers. </span> </p>
                    </section>
                    <section className="flex justify-center items-center ">
                        <div>
                            <input type="text" className="py-3 outline-none border-none px-7 rounded-bl-full rounded-tl-full w-full" placeholder='Your email address' />
                        </div>
                        <div>
                            <button className="py-3 px-6 flex rounded-br-full rounded-tr-full bg-yellow-500 whitespace-nowrap">Sign up</button>
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
                    <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  whitespace-nowrap gap-10" >
                        {items}
                    </section>
                </div>
            </main>

            <main className="w-11/12 m-auto md:my-16 my-10">
                <section className="md:flex md:justify-between text-center items-center ">
                    <logo className='text-4xl font-extrabold   '>
                        Vendra<sup className=' font-light text-sm'> &reg; </sup>
                    </logo>

                    <icon className="flex justify-center items-center gap-3 md:mt-0 mt-4">
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
                    </icon>
                </section>
                <hr className='my-6' />
                <section className="flex justify-between items-center md:flex-row  flex-col-reverse ">
                    <policy className='text-sm md:mt-0 mt-4' >
                        © Copyright 2023 All Right Reserved <span className=" text-yellow-600"><b>Vendra</b><sup className=' font-light text-sm'> &reg; </sup></span>
                    </policy>
                    <icon>
                        <img src="https://res.cloudinary.com/denajbnh4/image/upload/v1694950874/payment_mbisbh.png" alt="" />
                    </icon>
                </section>
            </main>

        </>
    )
}

export default Footer