/* eslint-disable no-unused-vars */
// import { HiOutlineChevronDown } from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { TbShoppingCartQuestion } from "react-icons/tb";
import CurencyConverter from '../../WebScrapper/CurencyConverter';
import { TbLogout } from "react-icons/tb";

const TopHeader = () => {
    const Navigate = useNavigate();
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    const userRole = window.localStorage.getItem("role");

    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "/account";
    };
    return (
        <div>
            <main className=" flex justify-between  gap-4 items-center   list-none md:py-5 py-3 text-sm select-none">
                <div className="flex gap-2">
                    {isLoggedIn === "true" && (userRole === "admin") && (
                        <li className=" flex gap-4 justify-center items-center ">
                            {userRole === "admin" && (
                                <ul className=' border bg-gray-100 hover:bg-gray-200 text-sm  rounded-full py-[6px] px-3  hover:cursor-pointer font-bold  flex items-center gap-1' onClick={() => Navigate("/admin-account")}> <MdOutlineAdminPanelSettings size={20} /> Admin Panel</ul>
                            )}


                        </li>
                    )}
                    {isLoggedIn === "true" && (userRole === "vendor") && (
                        <li className=" flex gap-4 justify-center items-center ">
                            <ul className='  border bg-gray-100 hover:bg-gray-200 text-sm  rounded-full py-[6px] px-3 whitespace-nowrap  hover:cursor-pointer font-bold  flex items-center gap-1' onClick={() => Navigate("/vendorpanel")}> Vendor Panel</ul>
                        </li>
                        // <TbShoppingCartQuestion size={20} />
                    )}


                    {/* <li className=" flex gap-4 justify-center items-center ">
                    <ul className='  border bg-gray-100 hover:bg-gray-200 text-sm  rounded-full py-[6px] px-4   justify-center  hover:cursor-pointer font-bold  flex items-center gap-1' onClick={() => Navigate("/vendorpanel")}><TbShoppingCartQuestion size={20} /> Vendor Panel</ul>
                </li> */}
                    {/* <ul className='  cursor-pointer text-indigo-700  font-bold   bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-full ' onClick={() => Navigate("/background-remove")}>Remove BG</ul> */}
                    {/* <ul className=' px-3 py-1 bg-gray-200  hover:bg-gray-300 cursor-pointer rounded-full' onClick={() => Navigate("/add-category")}>Add Category</ul> */}
                    {/* <ul className=' px-3 py-1 bg-gray-200  hover:bg-gray-300 cursor-pointer rounded-full flex gap-1' onClick={() => Navigate("/add-categoryprodcuts")}> Add Products</ul> */}
                    {/* { <ul className=' cursor-pointer text-indigo-700 font-bold   bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-md ' onClick={() => Navigate("/vendorpanel")}> Uploadcare</ul>} */}


                    <li>
                        {/* <ul className=' flex justify-center items-center gap-2'>English <HiOutlineChevronDown /></ul>
                    <ul className=' flex justify-center items-center gap-2'>USD <HiOutlineChevronDown /></ul> */}
                        <CurencyConverter />
                    </li>

                </div>
                {isLoggedIn === "true" ? (userRole !== "admin" && userRole !== "vendor") && (
                    <p className="font-bold py-[6px] px-3 bg-red-500 text-white cursor-pointer border hover:bg-red-600 border-red-300 rounded-full flex  justify-center items-center gap-2" onClick={logOut}>
                        Logout <TbLogout size={18} />
                    </p>
                    // <TbShoppingCartQuestion size={20} />
                ) : <div className=" lg:hidden block ">
                        <p className="font-bold py-[6px] px-3 bg-red-500 text-white cursor-pointer border hover:bg-red-600 border-red-300 rounded-full flex  justify-center items-center gap-2" onClick={logOut}>
                        Logout <TbLogout size={18} />
                    </p>
                </div>
                }


            </main>

        </div>
    );
}

export default TopHeader