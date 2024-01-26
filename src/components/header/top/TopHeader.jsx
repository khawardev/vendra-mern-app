import { HiOutlineChevronDown } from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
    const Navigate = useNavigate();
    const isLoggedIn = window.localStorage.getItem("loggedIn");

    return (
        <div>
            <main className=" flex md:justify-between justify-center gap-4 items-center list-none md:py-5 py-3 text-sm select-none">

                {isLoggedIn == "true" && <li className=" flex gap-4 justify-center items-center ">
                    <ul className='   cursor-pointer text-blue-700  font-bold bg-blue-100  hover:bg-blue-200 transition-all ease-in px-4 py-2 rounded-md  ' onClick={() => Navigate("/admin-account")}>Admin account</ul>
                    {/* <ul className='  cursor-pointer text-indigo-700  font-bold bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-full ' onClick={() => Navigate("/background-remove")}>Remove BG</ul> */}
                    {/* <ul className=' px-3 py-1 bg-gray-200  hover:bg-gray-300 cursor-pointer rounded-full' onClick={() => Navigate("/add-category")}>Add Category</ul> */}
                    {/* <ul className=' px-3 py-1 bg-gray-200  hover:bg-gray-300 cursor-pointer rounded-full flex gap-1' onClick={() => Navigate("/add-categoryprodcuts")}> Add Products</ul> */}
                    <ul className=' cursor-pointer text-indigo-700 font-bold bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-md ' onClick={() => Navigate("/uploadcare")}> Uploadcare</ul>
                    <ul className=' cursor-pointer text-indigo-700 font-bold bg-indigo-100  hover:bg-indigo-200 transition-all ease-in px-4 py-2 rounded-md ' onClick={() => Navigate("/OrderManage")}> OrderManage</ul>

                </li>}


                <li className="flex gap-4 ">
                    <ul className=' flex justify-center items-center gap-2'>English <HiOutlineChevronDown /></ul>
                    <ul className=' flex justify-center items-center gap-2'>USD <HiOutlineChevronDown /></ul>
                </li>
            </main>

        </div>
    )
}

export default TopHeader