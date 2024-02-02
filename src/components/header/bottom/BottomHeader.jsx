/* eslint-disable no-unused-vars */
import { HiOutlineChevronDown } from 'react-icons/hi2';
import { CiDiscount1 } from 'react-icons/ci';
import { BiCategory } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TbBrandBlogger } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const BottomHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  const Navigate = (path) => {
    navigate(path);
  };
  return (
    <div>

      <main className='  items-center justify-between list-none lg:flex hidden '>
        <main className='flex justify-center items-center gap-12 bg-gray-100 cursor-pointer py-4 px-6 rounded-tr-lg  rounded-tl-lg'>
          <section className='flex justify-center items-center gap-2'>
            <BiCategory className="stroke-custom" size={24} />
            <p >All Departments</p>
          </section>
          <HiOutlineChevronDown />
        </main>
        <main>
          <li className='flex items-center gap-2'>
            <ul className={`flex justify-center items-center gap-2 cursor-pointer transition-all ease-in ${currentRoute === '/' ? 'bg-gray-200' : 'hover:bg-gray-200'} rounded-full px-4 py-1`} onClick={() => Navigate("/")}> <GoHome /> Home </ul>
            <ul className={`flex justify-center items-center gap-2 cursor-pointer transition-all ease-in ${currentRoute === '/shop' ? 'bg-gray-200' : 'hover:bg-gray-200'} rounded-full px-4 py-1`} onClick={() => Navigate("/shop")}> <LuShoppingBag /> Shop </ul>
            <ul className={`flex justify-center items-center gap-2 cursor-pointer transition-all ease-in ${currentRoute === '/about' ? 'bg-gray-200' : 'hover:bg-gray-200'} rounded-full px-4 py-1`} onClick={() => Navigate("/about")}> <FaRegCircleQuestion /> About</ul>
            <ul className={`flex justify-center items-center gap-2 cursor-pointer transition-all ease-in ${currentRoute === '/blog' ? 'bg-gray-200' : 'hover:bg-gray-200'} rounded-full px-4 py-1`} onClick={() => Navigate("/blog")}> <TbBrandBlogger /> Blog</ul>
            <ul className={`flex justify-center items-center gap-2 cursor-pointer transition-all ease-in ${currentRoute === '/contact' ? 'bg-gray-200' : 'hover:bg-gray-200'} rounded-full px-4 py-1`} onClick={() => Navigate("/contact")}> <MdOutlineEmail /> Contact</ul>
          </li>
        </main>
        <main className='flex items-center justify-center gap-3 leading-4 hover:cursor-pointer' onClick={() => Navigate(`/discount`)}>
          <CiDiscount1 size={28} />
          <section>
            <span className='text-xs text-gray-500'>Only this weekend </span> <br />
            Super Discount
          </section>
          <HiOutlineChevronDown />
        </main>
      </main>


    </div>
  )
}

export default BottomHeader