import { VscHeart } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWishlistItems } from "../../../toolkit/Slices/WishlistSlice";
import Search from "./Search/Search";
import { useState } from "react";
import logo from "../../../assets/images/logo.png";
// import { TbLogout } from "react-icons/tb";

// import { selectUsers } from "../../../toolkit/Slices/UserSlice";
// import { selectSingleUsers } from "../../../toolkit/Slices/UserSlice";
import { selectExchangeRate } from '../../../toolkit/Slices/CompareSlice';
const MiddleHeader = () => {
  const Navigate = useNavigate();
  const ExchangeRate = useSelector(selectExchangeRate);

  // const isLoggedIn = window.localStorage.getItem("loggedIn");
  // const userRole = window.localStorage.getItem("role");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalSubtotal = useSelector((state) => state.cart.totalSubtotal);
  const wishlistItems = useSelector(selectWishlistItems);
  const [ShowSearch, setShowSearch] = useState(false);
  // const users = useSelector(selectUsers);
  // const Singleusers = useSelector(selectSingleUsers);
  // const [foundUserDetails, setfoundUserDetails] = useState({});

  // useEffect(() => {
  //   const flattenedArray = users?.flat(1);
  //   // const foundUserDetails1 = flattenedArray?.find(
  //     (item) => item?.email === Singleusers?.slice(-1)[0]
  //   );
  //   // setfoundUserDetails(foundUserDetails1);
  // }, []);
  // const logOut = () => {
  //   window.localStorage.clear();
  //   window.location.href = "/account";
  // };

  return (
    <div className=" md:py-6 pt-2 pb-6">
      <main className="flex justify-between items-center mt-3  ">
        <section
          className="text-3xl font-extrabold tracking-tighter cursor-pointer flex items-center gap-1"
          onClick={() => Navigate("/")}
        >
          <img src={logo} width={35} />
          Electra Mart<sup className="font-bold text-xl"> &reg; </sup>
        </section>
        <section className="lg:flex hidden justify-center items-center border rounded-full">
          {/* Search Section */}
          <div className="px-3">
            <FiSearch size={17} />
          </div>
          <input
            type="text"
            className="py-3 outline-none border-none "
            size={65}
            placeholder="Search your favorite product ..."
            onClick={() => setShowSearch(true)}
          />
          <button className="py-2 px-4 mr-1 rounded-full bg-yellow-500 font-bold">
            Search
          </button>
        </section>
        <section className="flex lg:gap-4 gap-1  justify-center items-center">
          {/* {isLoggedIn === "true" ? (userRole === "admin" || userRole === "vendor" ? (
            <div className="md:bg-transparent md:block hidden bg-slate-100 md:p-0 p-2 md:border-none border rounded-full gap-2 justify-center items-center cursor-pointer leading-3">
              <p className="font-bold py-[10px] px-5 bg-red-500 text-white border hover:bg-red-600 border-red-300 
                  rounded-full flex  justify-center items-center gap-2" onClick={logOut}>
                Logout <TbLogout size={18} />
              </p>
            </div>
          ) : (
            <div
              className="md:bg-transparent flex bg-slate-100 md:p-0 p-2 md:border-none border rounded-full gap-2 justify-center items-center cursor-pointer leading-3"
              onClick={() => Navigate("/user-account")}
            >
              <BsPerson size={28} />
              <div className="lg:block hidden">
                <p className=" text-xs font-bold">User</p>
                <span className="font-bold text-gray-800 ">
                  {foundUserDetails?.username
                    ? foundUserDetails?.username
                    : "Account"}
                </span>{" "}
              </div>
            </div>
          )
          ) : (
            <>
              <div
                className="md:bg-transparent bg-slate-100 flex md:p-0 p-2 md:border-none border rounded-full gap-2 justify-center items-center cursor-pointer leading-3"
                onClick={() => Navigate("/vendoraccount")}
              >
                <BsPerson size={28} />
                <div className="lg:block hidden ">
                  <span className="text-xs text-gray-800">Sign in</span> <br />
                  <p className="font-bold">Vendor</p>
                </div>
              </div>
              <div className="md:bg-transparent bg-slate-100 flex md:p-0 p-2 md:border-none border rounded-full gap-2 justify-center items-center cursor-pointer leading-3" onClick={() => Navigate("/account")}
              >
                <BsPerson size={28} />
                <div className="lg:block hidden">
                  <span className="text-xs text-gray-800 ">
                    {foundUserDetails?.username
                      ? foundUserDetails?.username
                      : "Sign in"}
                  </span>{" "}
                  <br />
                  <p className="font-bold">User</p>
                </div>
              </div>
            </>
          )} */}

          {/* Wishlist Section */}
          <div className="px-1" onClick={() => Navigate("/wishlist")}>
            <div className="relative cursor-pointer md:bg-transparent bg-slate-100 md:border-none border md:p-0 p-2 rounded-full">
              <VscHeart stroke-width={0.2} size={26} />
              <span className="absolute cart-popup md:top-0 md:left-4 top-2 left-6 bg-yellow-500 ">
                {wishlistItems?.length}
              </span>
            </div>
          </div>

          {/* Cart Section */}
          <div
            className="flex gap-2 justify-center items-center leading-3 cursor-pointer"
            onClick={() => Navigate("/cart")}
          >
            <div className="relative md:bg-transparent bg-slate-100 md:p-0 p-2 md:border-none border rounded-full">
              <BsCart2 stroke-width={0.2} size={26} />
              <span className="absolute cart-popup md:top-0 md:left-4 top-2 left-6 bg-yellow-500 ">
                {cartItems?.length}
              </span>
            </div>
            <div className="md:block hidden">
              {totalSubtotal !== 0 && (
                <>
                  <span className="text-xs text-gray-800">Total</span> <br />
                  {/* <b>${totalSubtotal && totalSubtotal.toFixed(2)}</b> */}
                  {/* <b> <span className=' text-sm'>{ExchangeRate ? ExchangeRate.code : 'USD'}</span><span className=' '> {ExchangeRate ? (ExchangeRate.value * totalSubtotal).toFixed(0) : totalSubtotal}.00</span> </b>} */}
                  <b>
                    <span className='text-xs mr-1'>{ExchangeRate ? ExchangeRate.code : 'USD'}</span>
                    <span>{ExchangeRate ? (ExchangeRate.value * totalSubtotal).toFixed(0) : totalSubtotal}</span>
                  </b>

                </>
              )}
            </div>
          </div>
        </section>
      </main>
      {ShowSearch && <Search setShowSearch={setShowSearch} />}
    </div>
  );
};

export default MiddleHeader;
