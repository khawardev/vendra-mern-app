import { HiOutlineChevronDown } from 'react-icons/hi2';
import { VscHeart } from 'react-icons/vsc';
import { BsCart2, BsPerson } from 'react-icons/bs';
import '../../assets/styles/Header.scss';
import { FiSearch } from 'react-icons/fi';
import { CiDiscount1 } from 'react-icons/ci';
import { BiCategory } from 'react-icons/bi';
// import { BiUser } from 'react-icons/bi';

const Header = () => {
    return (
        <>
            <div className='w-11/12  m-auto'>

                <main className=" flex justify-between items-center list-none py-5 text-sm select-none">
                    <li className=" flex gap-4 justify-center items-center ">
                        <ul className=' px-3 py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full'>My account</ul>
                        <ul>Featured Products</ul>
                        <ul>Wishlist</ul>
                    </li>

                    <li className="flex gap-4 ">
                        <ul>Order Tracking</ul>
                        <ul className=' flex justify-center items-center gap-2'>English <HiOutlineChevronDown /></ul>
                        <ul className=' flex justify-center items-center gap-2'>USD <HiOutlineChevronDown /></ul>
                    </li>
                </main>


                <main className='flex justify-between items-center pb-5 '>
                    <logo className='text-4xl font-extrabold'>
                        Vendra<sup className=' font-light text-sm'> &reg; </sup>
                    </logo>
                    <search className='flex justify-center items-center border rounded-full'>
                        <div className='px-3'>
                            <FiSearch size={17} />
                        </div>
                        <input type="text" className='py-3 outline-none border-none' placeholder='Search your favorite product ...' size={60} />
                        <button className='py-2 px-4 mr-1 rounded-full  bg-yellow-500'>Search</button>
                    </search>
                    <section className='flex gap-6 justify-center items-center'>
                        <div className='flex gap-2 justify-center items-center  leading-3'>
                            <BsPerson size={28} />
                            <div>
                                <span className='text-xs text-gray-500'>Sign in</span> <br />
                                Account
                            </div>
                        </div>
                        <div className='px-1 position-relative'>
                            <span className="cart-popup absolute ml-4 bg-yellow-500 ">5</span>
                            <VscHeart size={26} />
                        </div>
                        <div className='flex gap-2 justify-center items-center leading-3'>
                            <div className='position-relative '>
                                <span className="cart-popup absolute ml-4 bg-yellow-500">5</span>
                                <BsCart2 size={26} />
                            </div>
                            <div >
                                <span className='text-xs text-gray-500'>Total</span> <br />
                                $50.00
                            </div>
                        </div>
                    </section>
                </main>

                <main className=' flex items-center justify-between list-none '>
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