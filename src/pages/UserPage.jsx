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
const UserPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('asas');
  const users = useSelector(selectUsers);
  console.log("🚀 ~ file: UserPage.jsx:17 ~ UserPage ~ users:", users)




  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/account";
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchUserData = async () => {
      try {

        const response = await fetch('http://localhost:5000/data', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });


        if (response.ok) {
          const userData = await response.json();
          console.log("🚀 ~ file: UserPage.jsx:43 ~ fetchUserData ~ userData:", userData)

          setUserDetails(userData);
        } else {
          console.error('Error fetching user data:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const flattenedArray = users.flat(1);
  const foundObject = flattenedArray.find(item => item?.email === userDetails?.email);
  console.log( foundObject)
  // const filterByEmail = (email) => {
  //   const filteredUsers = users.filter(user => user.email === email);
  //   console.log(filteredUsers)
  // };
  // filterByEmail(userDetails.email);

  if (loading) {
    return <div>Loading...</div>;
  } return (
    <div className=" w-11/12 m-auto md:py-16 md:px-12 py-6  md:border my-10 rounded-xl md:border-yellow-500">
      <section className='md:flex flex-row-reverse justify-between items-center'>
        <div className='rounded-full  md:mb-0 mb-6 flex justify-center'>
          {/* <img src={User} className='rounded-full p-1 border-2 md:w-[75px] w-[130px]' alt="" /> */}
        </div>
        <div>
          <p className="text-lg text-gray-500">Manage Your account</p>
          <p className="text-lg text-gray-500 my-3">Click <span className="text-black hover:cursor-pointer px-[10px] p-[3px] bg-gray-200 hover:bg-gray-100 rounded-full border mx-[2px] border-yellow-500">here</span> to edit your information</p>
        </div>
      </section>



      <p className=" text-2xl font-bold my-10 ">Your account details</p>

      <main className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <section className=" border border-yellow-500 md:px-10 md:py-10 px-5 py-10 w-full rounded-xl shadow">
          <p className="text-gray-500  ">PERSONAL</p>
          <p className="text-gray-500  my-4"> <span className=" text-black font-bold">EMAIL: </span> <span className='ml-3'>{userDetails?.email}</span> </p>
          <p className="text-gray-500  my-4"> <span className=" text-black font-bold">USERNAME: </span> <span className='ml-3'>{foundObject?.username}</span>  </p>
          <div className=' flex items-center justify-between'>
            <p className="text-gray-500"> <span className=" text-black font-bold">PASSWORD: </span> <span className='ml-3'>
              {passwordVisible ? foundObject?.password : '*'.repeat(foundObject?.password.length)}
            </span>
            </p>
            <button onClick={togglePasswordVisibility}>
              {passwordVisible ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
            </button>
          </div>
        </section>
        {/* <section className=" border border-yellow-500 md:px-10 md:py-10 px-5 py-10 w-full rounded-xl shadow">
          <p className="text-gray-500 ">USER HISTORY</p>
          <p className="text-gray-500  my-4"> <span className=" text-black font-bold">USER SINCE: </span> <span className='ml-3'>Oct 2023</span> </p>
          <p className="text-gray-500  my-4"> <span className=" text-black font-bold">USER PURCHASES: </span><span className='ml-3'>  54</span></p>
          <p className="text-gray-500"> <span className=" text-black font-bold">COST OF PURCHASES: </span><span className='ml-3'> 240 $</span></p>
        </section> */}

      </main>
      <div className='mt-10 flex justify-end items-center'>
        <button id="bottone1" className='text-white' onClick={logOut} ><strong>Logout</strong></button>
      </div>
    </div>
  )
}

export default UserPage