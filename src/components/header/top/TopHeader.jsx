// import { HiOutlineChevronDown } from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { TbShoppingCartQuestion } from "react-icons/tb";
import CurencyConverter from '../../WebScrapper/CurencyConverter';
const TopHeader = () => {
    const Navigate = useNavigate();
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    const userRole = window.localStorage.getItem("role");
    return (
        <div>
            <main className=" flex md:justify-between justify-center gap-4 items-center   list-none md:py-5 py-3 text-sm select-none">
            {isLoggedIn === "true" && (userRole === "admin") &&   (
               <li className=" flex gap-4 justify-center items-center ">
                 {userRole === "admin" &&  (
                    <ul className='   cursor-pointer text-blue-700  font-bold   bg-blue-100  hover:bg-blue-200 transition-all ease-in px-4 py-2 rounded-md  flex items-center gap-1' onClick={() => Navigate("/admin-account")}> <MdOutlineAdminPanelSettings size={20} /> Admin Panel</ul>
<<<<<<< HEAD
                    <ul className=' cursor-pointer text-indigo-700 font-bold   bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-md  flex items-center gap-1' onClick={() => Navigate("/vendorpanel")}><TbShoppingCartQuestion size={20} /> Vendor Panel</ul>
      

                </li>}
=======
                )}
                                     
                    <ul className=' cursor-pointer text-indigo-700 font-bold   bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-md  flex items-center gap-1' onClick={() => Navigate("/uploadcare")}><TbShoppingCartQuestion size={20} /> Vendor Panel</ul>
                    <ul className=' cursor-pointer text-indigo-700 font-bold   bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-md ' onClick={() => Navigate("/OrderManage")}>OrderManage</ul>
                    <ul className=' cursor-pointer text-indigo-700 font-bold   bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-md ' onClick={() => Navigate("/ContactManage")}>ContactManage</ul>
                
                </li>
                )}
                {isLoggedIn === "true" && (userRole === "vendor") &&   (
               <li className=" flex gap-4 justify-center items-center ">             
                    <ul className=' cursor-pointer text-indigo-700 font-bold   bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-md  flex items-center gap-1' onClick={() => Navigate("/uploadcare")}><TbShoppingCartQuestion size={20} /> Vendor Panel</ul>
                    <ul className=' cursor-pointer text-indigo-700 font-bold   bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-md ' onClick={() => Navigate("/OrderManage")}>OrderManage</ul>
                    <ul className=' cursor-pointer text-indigo-700 font-bold   bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-md ' onClick={() => Navigate("/ContactManage")}>ContactManage</ul>
                
                </li>
                )}
>>>>>>> 899fa8552c2a95fc72c8d44a74f39b7f58a053d4
                {/* <ul className='  cursor-pointer text-indigo-700  font-bold   bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-full ' onClick={() => Navigate("/background-remove")}>Remove BG</ul> */}
                {/* <ul className=' px-3 py-1 bg-gray-200  hover:bg-gray-300 cursor-pointer rounded-full' onClick={() => Navigate("/add-category")}>Add Category</ul> */}
                {/* <ul className=' px-3 py-1 bg-gray-200  hover:bg-gray-300 cursor-pointer rounded-full flex gap-1' onClick={() => Navigate("/add-categoryprodcuts")}> Add Products</ul> */}
                {/* { <ul className=' cursor-pointer text-indigo-700 font-bold   bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-md ' onClick={() => Navigate("/vendorpanel")}> Uploadcare</ul>} */}


                <li>
                    {/* <ul className=' flex justify-center items-center gap-2'>English <HiOutlineChevronDown /></ul>
                    <ul className=' flex justify-center items-center gap-2'>USD <HiOutlineChevronDown /></ul> */}
                    <CurencyConverter />
                </li>
            </main>

        </div>
    );
}

export default TopHeader