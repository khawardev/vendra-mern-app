/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// import User from '../assets/images/user.png';
// import { decode } from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import '../assets/styles/UserPage.scss';
import { useContext } from 'react'
import { Context } from "../context/AppContext";
import { useSelector } from 'react-redux';
import { selectUsers } from '../toolkit/Slices/UserSlice';
import { selectSingleUsers } from '../toolkit/Slices/UserSlice';
import { TbLogout } from "react-icons/tb";

const UserPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [foundUserDetails, setfoundUserDetails] = useState({});
  const users = useSelector(selectUsers);
  const Singleusers = useSelector(selectSingleUsers);

  useEffect(() => {
    const flattenedArray = users?.flat(1);
    const foundUserDetails1 = flattenedArray?.find(item => item?.email === Singleusers?.slice(-1)[0]);
    setfoundUserDetails(foundUserDetails1)
  }, [])





  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/account";
  };

  // useEffect(() => {
  //   const dataToSave = {
  //     email: foundUserDetails?.email,
  //     username: foundUserDetails?.username,
  //     password: foundUserDetails?.password
  //   };
  //   localStorage.setItem('userDetails', JSON.stringify(dataToSave));
  // }, [foundUserDetails?.email, foundUserDetails?.username, foundUserDetails?.password]);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const fetchUserData = async () => {
  //     try {

  //       const response = await fetch('http://localhost:5000/data', {
  //         method: 'GET',
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });


  //       if (response?.ok) {
  //         const userData = await response.json();
  //         setUserDetails(userData);
  //       } else {
  //         console.error('Error fetching user data:', response?.status, response?.statusText);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // const [LocalSUserDetails, setLocalSFoundUserDetails] = useState({});
  // useEffect(() => {
  //   const storedData = localStorage.getItem('userDetails');
  //   if (storedData) {
  //     const parsedData = JSON.parse(storedData);
  //     setLocalSFoundUserDetails(parsedData);
  //   }
  // }, []);

  return (
    <div className=" w-11/12 m-auto md:py-16 md:px-12 py-6  md:border my-10 rounded-xl ">
      <section className='md:flex flex-row-reverse justify-between items-center'>
        <div className='rounded-full  md:mb-0 mb-6 flex justify-center'>
          {/* <img src={User1} className='rounded-full p-1 border-2 md:w-[75px] w-[130px]' alt="" /> */}
        </div>
        <div>
          {/* <p className="text-lg text-gray-500  leading-3">Manage your account</p> */}
          {/* <p className="text-lg text-gray-500 my-3 leading-16">Click <span className="font-bold   text-black hover:cursor-pointer hover:underline hover:text-blue-500">here</span> to edit your information</p> */}
        </div>
      </section>



      <p className=" text-2xl   font-bold   my-10 ">Your account details</p>

      <main className=" gap-6">
        <section className=" border  md:px-10 md:py-10 px-5 py-10 w-full rounded-xl ">
          <p className="text-gray-500  ">PERSONAL DETAILS</p>
          <p className="text-gray-500  my-4"> <span className=" text-black font-bold  ">EMAIL: </span> <span className='ml-3'>{foundUserDetails?.email}</span> </p>

          <p className="text-gray-500  my-4"> <span className=" text-black font-bold  ">USERNAME: </span> <span className='ml-3'>{foundUserDetails?.username}</span>  </p>
          <div className=' flex items-center justify-between'>
            <div className='flex'>
              <p className=" text-black font-bold  ">PASSWORD: </p>
              <div className='ml-3 text-gray-500'>
                {passwordVisible ? foundUserDetails?.password : '*'.repeat(foundUserDetails?.password?.length)}
              </div>
            </div>

            <button onClick={togglePasswordVisibility}>
              {passwordVisible ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
            </button>
          </div>
        </section>
        {/* <section className=" border border-yellow-500 md:px-10 md:py-10 px-5 py-10 w-full rounded-xl shadow">
          <p className="text-gray-500 ">USER HISTORY</p>
          <p className="text-gray-500  my-4"> <span className=" text-black font-bold  ">USER SINCE: </span> <span className='ml-3'>Oct 2023</span> </p>
          <p className="text-gray-500  my-4"> <span className=" text-black font-bold  ">USER PURCHASES: </span><span className='ml-3'>  54</span></p>
          <p className="text-gray-500"> <span className=" text-black font-bold  ">COST OF PURCHASES: </span><span className='ml-3'> 240 $</span></p>
        </section> */}

      </main>
      <div className='mt-10 flex justify-end items-center'>
        <button className="font-bold py-[10px] px-5 bg-red-600 text-white border hover:bg-red-700 border-red-300 
                  rounded-lg flex  justify-center items-center gap-2" onClick={logOut}>
          Logout <TbLogout size={18} />
        </button>
        {/* <button className='py-3 px-8 rounded-lg hover:bg-red-700  cursor-pointer transition-all ease-in bg-red-600 text-white' onClick={logOut} ><strong>Logout</strong></button> */}
      </div>
    </div>
  )
}

export default UserPage