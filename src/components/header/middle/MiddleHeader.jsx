import { VscHeart } from 'react-icons/vsc';
import { BsCart2, BsPerson } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectWishlistItems } from '../../../toolkit/Slices/WishlistSlice';
import Search from './Search/Search';
import { useState, useEffect } from 'react';
import logo from '../../../assets/images/logo.png';

import { selectUsers } from '../../../toolkit/Slices/UserSlice';
import { selectSingleUsers } from '../../../toolkit/Slices/UserSlice';
const MiddleHeader = () => {
  const Navigate = useNavigate();
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalSubtotal = useSelector((state) => state.cart.totalSubtotal);
  const wishlistItems = useSelector(selectWishlistItems);
  const [ShowSearch, setShowSearch] = useState(false);
  const users = useSelector(selectUsers);
  const Singleusers = useSelector(selectSingleUsers);
  const [foundUserDetails, setfoundUserDetails] = useState({});




  useEffect(() => {
    const flattenedArray = users?.flat(1);
    const foundUserDetails1 = flattenedArray?.find(item => item?.email === Singleusers?.slice(-1)[0]);
    setfoundUserDetails(foundUserDetails1)
  }, [])





  return (
    <div>
      <main className='flex justify-between items-center   mt-3 mb-8 '>
        <section className='text-4xl font-extrabold cursor-pointer flex items-center gap-1' onClick={() => Navigate("/")}>
          <img src={logo} width={35} />
          Vendra<sup className=' font-bold text-xl'> &reg; </sup>
        </section>
        <section className='lg:flex hidden justify-center items-center border rounded-full'>
          <div className='px-3'>
            <FiSearch size={17} />
          </div>
          <input
            type="text"
            className="py-3 outline-none border-none "
            size={65}
            placeholder="Search your favorite product ..."
            onClick={() => { setShowSearch(true); }}
          />
          {/* <input type="text" className='py-3 outline-none border-none ' size={65} placeholder='Search your favorite product ...' /> */}
          <button className='py-2 px-4 mr-1 rounded-full  bg-yellow-500    font-bold'>Search</button>
        </section>
        <section className='flex lg:gap-4 gap-1  justify-center items-center'>

          <div className='md:bg-transparent flex bg-slate-100 md:p-0 p-2 md:border-none border rounded-full  gap-2 justify-center items-center cursor-pointer leading-3' onClick={() => Navigate(isLoggedIn == "true" ? "/user-account" : "/account")}>
            <BsPerson size={28} />
            <div className='lg:block hidden'>
              <span className='text-xs text-gray-800'>{foundUserDetails?.username ? foundUserDetails?.username : 'Sign in'}</span> <br />
              User
            </div>
          </div>

          <div className='md:bg-transparent flex bg-slate-100 md:p-0 p-2 md:border-none border rounded-full  gap-2 justify-center items-center cursor-pointer leading-3' onClick={() => Navigate("/vendoraccount")}>
            <BsPerson size={28} />
            <div className='lg:block hidden'>
              <span className='text-xs text-gray-800'>Sign in</span> <br />
              Vendor
            </div>
          </div>



            <div className='px-1  ' onClick={() => Navigate('/wishlist')}>
              <div className='relative cursor-pointer md:bg-transparent bg-slate-100 md:border-none border md:p-0 p-2 rounded-full'>
                <VscHeart stroke-width={0.2} size={26} />
                <span className=" absolute cart-popup md:top-0 md:left-4 top-2 left-6 bg-yellow-500 ">{wishlistItems?.length}</span>
              </div>
            </div>

            <div className='flex gap-2 justify-center items-center leading-3 cursor-pointer' onClick={() => Navigate('/cart')}>
              <div className='relative md:bg-transparent bg-slate-100 md:border-none border md:p-0 p-2 rounded-full'>
                <BsCart2 stroke-width={0.2} size={26} />
                <span className=" absolute cart-popup  md:top-0 md:left-4 top-2 left-6 bg-yellow-500 ">{cartItems?.length}</span>
              </div>
              <div className='md:block hidden'>
                {totalSubtotal !== 0 && <>
                  <span className='text-xs text-gray-800'>Total</span> <br />
                  <b>${totalSubtotal && totalSubtotal.toFixed(2)}</b>
                </>
                }
              </div>

          </div>



        </section>
      </main>
      {ShowSearch && <Search setShowSearch={setShowSearch} />}
    </div>
  )
}

export default MiddleHeader