import '../../assets/styles/Header.scss';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import { VscHeart } from 'react-icons/vsc';
import { BsCart2, BsPerson } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { CiDiscount1 } from 'react-icons/ci';
import { BiCategory } from 'react-icons/bi';
// import { BiUser } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const Navigate = useNavigate();
    return (
        <>
            <div className='w-11/12  m-auto'>
                <main className=" flex md:justify-between justify-center gap-4 items-center list-none md:py-5 py-3 text-sm select-none">
                    <li className=" flex gap-4 justify-center items-center ">
                        <ul className=' px-3 py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full'>My account</ul>
                    </li>
                    <li className="flex gap-4 ">
                        <ul className=' flex justify-center items-center gap-2'>English <HiOutlineChevronDown /></ul>
                        <ul className=' flex justify-center items-center gap-2'>USD <HiOutlineChevronDown /></ul>
                    </li>
                </main>
            </div>
            
            <hr className='lg:hidden block' />


            <div className='w-11/12  m-auto select-none'>
                <main className='flex justify-between items-center bg-red- lg:pt-0 pt-5  pb-5'>
                    <logo className='text-4xl font-extrabold cursor-pointer' onClick={() => Navigate("/")}>
                        Vendra<sup className=' font-light text-sm'> &reg; </sup>
                    </logo>
                    <search className='lg:flex hidden justify-center items-center border rounded-full'>
                        <div className='px-3'>
                            <FiSearch size={17} />
                        </div>
                        <input type="text" className='py-3 outline-none border-none ' size={65} placeholder='Search your favorite product ...' />
                        <button className='py-2 px-4 mr-1 rounded-full  bg-yellow-500'>Search</button>
                    </search>
                    <section className='flex lg:gap-6 gap-1 justify-center items-center'>
                        <div className='md:bg-transparent flex bg-slate-100 md:p-0 p-2 md:border-none border rounded-full  gap-2 justify-center items-center cursor-pointer leading-3' onClick={() => Navigate("/account")}>
                            <BsPerson size={28} />
                            <div className='lg:block hidden'>
                                <span className='text-xs text-gray-500'>Sign in</span> <br />
                                Account
                            </div>
                        </div>
                        <div className='px-1 '>
                            <div className='relative md:bg-transparent bg-slate-100 md:border-none border md:p-0 p-2 rounded-full'>
                                <VscHeart size={26} />
                                <span className=" absolute cart-popup md:top-0 md:left-4 top-2 left-6 bg-yellow-500 ">5</span>
                            </div>
                        </div>
                        <div className='flex gap-2 justify-center items-center leading-3'>
                            <div className='relative md:bg-transparent bg-slate-100 md:border-none border md:p-0 p-2 rounded-full'>
                                <BsCart2 size={26} />
                                <span className=" absolute cart-popup  md:top-0 md:left-4 top-2 left-6 bg-yellow-500 ">5</span>

                            </div>
                            <div className='md:block hidden'>
                                <span className='text-xs text-gray-500'>Total</span> <br />
                                $50.00
                            </div>
                        </div>
                    </section>
                </main>


                <search className='lg:hidden flex justify-between items-center border rounded-full mb-4'>
                    <div className='flex justify-center items-center'>
                        <div className='px-3'>
                            <FiSearch size={17} />
                        </div>
                        <div>
                            <input type="text" className='py-3 outline-none border-none w-full' placeholder='Search product ...' />
                        </div>
                    </div>
                    
                    <button className='py-2 px-4 mr-1 rounded-full  bg-yellow-500'>Search</button>
                </search>



                <main className='  items-center justify-between list-none lg:flex hidden '>
                    <categories className='flex justify-center items-center gap-12 bg-gray-100 cursor-pointer py-4 px-6 rounded-tr-lg  rounded-tl-lg'>
                        <div className='flex justify-center items-center gap-2'>
                            <BiCategory className="stroke-custom" size={24} />
                            <p >All Departments</p>
                        </div>
                        <HiOutlineChevronDown />
                    </categories>
                    <links>
                        <li className=' flex  items-center gap-5'>
                            <ul className='flex justify-center items-center gap-2 cursor-pointer bg-gray-200 rounded-full px-4 py-1'>Home </ul>
                            <ul className='flex justify-center items-center gap-1 cursor-pointer'>Shop  <HiOutlineChevronDown size={12} /></ul>
                            <ul className='flex justify-center items-center gap-2 cursor-pointer'>About</ul>
                            <ul className='flex justify-center items-center gap-2 cursor-pointer'>Blog</ul>
                            <ul className='flex justify-center items-center gap-2 cursor-pointer'>Contact</ul>
                        </li>
                    </links>
                    <discount className='flex items-center justify-center gap-3 leading-4'>
                        <CiDiscount1 size={28} />
                        <div>
                            <span className='text-xs text-gray-500'>Only this weekend </span> <br />
                            Super Discount
                        </div>
                        <HiOutlineChevronDown />
                    </discount>
                </main>

            </div>
            <hr />
        </>

    )
}

export default Header