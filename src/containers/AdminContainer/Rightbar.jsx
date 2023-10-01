import React, { Component, useEffect, useState } from "react";
import { MdOutlineDeleteSweep } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
export default function Rightbar({ userData }) {

  //setting state
  const [data, setData] = useState([]);



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
                                        <button
                                            href="#"
                                            className="font-medium bg-blue-500 rounded-full py-1 px-3"
                                            onClick={() => console.log(`Edit user with ID ${user.id}`)}
                                        >
                                            <span className='flex justify-between items-center gap-2'> <BiEditAlt size={16} />   Edit</span>
                                        </button>
                                        <button
                                            href="#"
                                            className="font-medium bg-red-500 rounded-full py-1 px-3"
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