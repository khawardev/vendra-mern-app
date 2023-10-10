import React, { Component, useEffect, useState } from "react";
import { MdOutlineDeleteSweep } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
<<<<<<< HEAD
export default function Rightbar({ userData }) {
=======
function Rightbar() {
    const [users, setUsers] = useState([
        { id: 1001, username: 'Khawar', email: 'Khawarsultan.develoepr@gmail.com', password: '12345691022225ffdf2' },
        { id: 1002, username: 'Khawar', email: 'Khawarsultan.develoepr@gmail.com', password: '1234sdsd56789' },
        { id: 1003, username: 'Khawar', email: 'Khawarsultan.develoepr@gmail.com', password: '123456789' },
        { id: 1004, username: 'Khawar', email: 'Khawarsultan.develoepr@gmail.com', password: '123456789' },
>>>>>>> c80a3ca189e652cb646d9f415b77f40748a67c95

  //setting state
  const [data, setData] = useState([]);


<<<<<<< HEAD

  useEffect(() => {
    fetch("http://localhost:5000/getAllUser", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userData");
          setData(data.data);
        });
  }, []);


//   //fetching all user
//   const getAllUser = () => {
   
//   };
  return (
    
    <div className="relative overflow-x-auto bg-gray-100  rounded-2xl p-8 ">
     <div className="auth-inner" style={{ width: "auto" }}>
     <p className='my-4 text-2xl  font-extrabold ml-1'> Registered Users</p>
        <table className="w-full text-sm text-left" >
          <tr >
          <th className="px-6 py-4" >ID</th>
            <th className="px-6 py-4" >USERNAME</th>
            <th className="px-6 py-4">EMAIL</th>
            <th className="px-6 py-4">PASSWORD</th>
            <th scope="col" className="px-6 py-3">
                                ACTION
                            </th>
          </tr>
          <tbody>
          {data.map((i) => {
            return (
              <tr  key={i._id} className={i % 2 === 0 ? 'bg-gray-200' : ''}>
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{i._id}</th>
                <td className="px-6 py-4" >{i.username}</td>
                <td className="px-6 py-4" >{i.email}</td>
                <td className="px-6 py-4" >{i.password}</td>
                <td className="text-white flex px-6 py-3 gap-2">
=======
    return (
        <>
            <p className='my-4 text-2xl  font-extrabold ml-1 '> Registered Users</p>

            <div className="relative overflow-x-auto bg-gray-100  rounded-2xl p-8  border border-yellow-500">
                <table className="w-full text-sm text-left">
                    <thead className="uppercase ">
                        <tr  >
                            <th scope="col" className="px-6 py-3  ">
                                 id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                 name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                 Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                 Password
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr className={'bg-gray-200'}>
                                <td colSpan="5" className="px-6 py-4 text-center"> No data</td>
                            </tr>
                        ) : (
                            users.map((user, index) => (
                                <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {user.id}
                                    </th>
                                    <td className="px-6 py-4">{user.username}</td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4">{user.password}</td>
                                    <td className="text-white flex px-6 py-3 gap-2">
>>>>>>> c80a3ca189e652cb646d9f415b77f40748a67c95
                                        <button
                                            href="#"
                                            className="font-medium bg-blue-500 rounded py-1 px-3"
                                            onClick={() => console.log(`Edit user with ID ${user.id}`)}
                                        >
                                            <span className='flex justify-between items-center gap-2'> <BiEditAlt size={16} />   Edit</span>
                                        </button>
                                        <button
                                            href="#"
                                            className="font-medium bg-red-500 rounded py-1 px-3"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            <span className='flex justify-between items-center gap-1'> <MdOutlineDeleteSweep size={18} />   Delete</span>
                                        </button>
                                        </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}