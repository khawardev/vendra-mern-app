/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import User from '../assets/images/user.png';
// import { decode } from 'jwt-decode';
import '../assets/styles/UserPage.scss';
import { useContext } from 'react'
import { Context } from "../context/AppContext";
const UserPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('asas');
  const { Token } = useContext(Context);
  console.log("🚀 ~ file: UserPage.jsx:15 ~ UserPage ~ Token:", Token)
  


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/account";
  };
  

  useEffect(() => {
    // const token = localStorage.getItem('hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe');
    // console.log('Token:', token);
    const fetchUserData = async () => {
      try {
        // // const token = localStorage.getItem('hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe');
        // // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imhhc2VlYkBnbWFpbC5jb20iLCJpYXQiOjE3MDI4NDcxNjIsImV4cCI6MTcwMjg0ODA2Mn0.NW14R2dnJCRYA62B14RXD3vzJC-U5QgwBI7ciifbEXk"
        // // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlYWQzMkBnbWFpbC5jb20iLCJpYXQiOjE3MDI4NDc0MzMsImV4cCI6MTcwMjg0ODMzM30.Y5usbsapmLxgWecVwFE3WqWOmDB604WjTcKCtYuyaAE"
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imhhc2VlYkBnbWFpbC5jb20iLCJpYXQiOjE3MDI4NDc5MDgsImV4cCI6MTcwMjg0ODgwOH0.22Q0Q5NFZKZnafwe-9yp3zMsTXpyln6DUGWKbJFId5c"
        // if (!token) {
        //   console.error('Token not found in localStorage');
        //   return;
        // }
  
        const response = await fetch('http://localhost:5000/data', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
  
        console.log("🚀 ~ file: UserPage.jsx:27 ~ fetchUserData ~ response:", response);
  
        if (response.ok) {
          const userData = await response.json();
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
  
  
  


  if (loading) {
    return <div>Loading...</div>;
  }    return (
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
                    <p className="text-gray-500  my-4"> <span className=" text-black font-bold">EMAIL: </span> <span className='ml-3'>{userDetails.email}</span> </p>
                    <p className="text-gray-500  my-4"> <span className=" text-black font-bold">USERNAME: </span> <span className='ml-3'>{userDetails.username}</span>  </p>
                    <div className=' flex items-center justify-between'>
                        <p className="text-gray-500"> <span className=" text-black font-bold">PASSWORD: </span> <span className='ml-3'>
                            {passwordVisible ? password : '*'.repeat(password.length)}
                        </span>
                        </p>
                        <button onClick={togglePasswordVisibility}>
                            {passwordVisible ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                        </button>
                    </div>
                </section>
                <section className=" border border-yellow-500 md:px-10 md:py-10 px-5 py-10 w-full rounded-xl shadow">
                    <p className="text-gray-500 ">USER HISTORY</p>
                    <p className="text-gray-500  my-4"> <span className=" text-black font-bold">USER SINCE: </span> <span className='ml-3'>Oct 2023</span> </p>
                    <p className="text-gray-500  my-4"> <span className=" text-black font-bold">USER PURCHASES: </span><span className='ml-3'>  54</span></p>
                    <p className="text-gray-500"> <span className=" text-black font-bold">COST OF PURCHASES: </span><span className='ml-3'> 240 $</span></p>
                </section>

            </main>
            <div className='mt-10 flex justify-end items-center'>
                <button id="bottone1" className='text-white' onClick={logOut} ><strong>Logout</strong></button>
            </div>
        </div>
    )
}

export default UserPage