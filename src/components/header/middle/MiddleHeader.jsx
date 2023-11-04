import { VscHeart } from 'react-icons/vsc';
import { BsCart2, BsPerson } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

const MiddleHeader = () => {
  const Navigate = useNavigate();
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <div>

      <main className='flex justify-between items-center bg-red- lg:pt-0 pt-5  pb-5'>
        <section className='text-4xl font-extrabold cursor-pointer' onClick={() => Navigate("/")}>
          Vendra<sup className=' font-light text-sm'> &reg; </sup>
        </section>
        <section className='lg:flex hidden justify-center items-center border rounded-full'>
          <div className='px-3'>
            <FiSearch size={17} />
          </div>
          <input type="text" className='py-3 outline-none border-none ' size={65} placeholder='Search your favorite product ...' />
          <button className='py-2 px-4 mr-1 rounded-full  bg-yellow-500'>Search</button>
        </section>
        <section className='flex lg:gap-6 gap-1 justify-center items-center'>

          <div className='md:bg-transparent flex bg-slate-100 md:p-0 p-2 md:border-none border rounded-full  gap-2 justify-center items-center cursor-pointer leading-3' onClick={() => Navigate(isLoggedIn == "true" ? "/user-account" : "/account")}>
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

    </div>
  )
}

export default MiddleHeader