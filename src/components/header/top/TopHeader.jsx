import { HiOutlineChevronDown } from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";
import { BsPerson } from 'react-icons/bs';

const TopHeader = () => {
    const Navigate = useNavigate();

    return (
        <div>
            <main className=" flex md:justify-between justify-center gap-4 items-center list-none md:py-5 py-3 text-sm select-none">



                <li className=" flex gap-4 justify-center items-center ">
                    <ul className=' px-3 py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-lg' onClick={() => Navigate("/admin-account")}>Admin account</ul>
                    <ul className=' px-3 py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-lg flex gap-1' onClick={() => Navigate("/user-account")}> <span className=' md:flex hidden'><BsPerson size={18} /></span> User account</ul>
                    <ul className=' px-3 py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-lg' onClick={() => Navigate("/add-category")}>Add Category</ul>
                    <ul className=' px-3 py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-lg flex gap-1' onClick={() => Navigate("/add-categoryprodcuts")}> Add Products</ul>
                </li>
                <li className="flex gap-4 ">
                    <ul className=' flex justify-center items-center gap-2'>English <HiOutlineChevronDown /></ul>
                    <ul className=' flex justify-center items-center gap-2'>USD <HiOutlineChevronDown /></ul>
                </li>
            </main>

        </div>
    )
}

export default TopHeader