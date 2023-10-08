/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import User from '../assets/images/user.png';
const UserPage = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);


    const [password, setPassword] = useState('asas');
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    return (
        <div className=" w-11/12 m-auto py-16 px-12 border my-10 rounded-xl border-yellow-500">
            <section className=' flex justify-between items-center'>
                <div>
                    <p className=" text-lg text-gray-500 ">Manage Your account</p>
                    <p className=" text-lg text-gray-500  my-3 ">Click <span className=" text-black hover:cursor-pointer px-[10px] p-[3px] bg-gray-200 hover:bg-gray-100 rounded-full border mx-[2px] border-yellow-500">here</span> to edit your information</p>

                </div>
                <div className='p-1 rounded-full border-2'>
                <img src={User} width={70} className=' rounded-full' alt="" />

                </div>
            </section>


            <p className=" text-2xl font-bold my-10 ">Your account details</p>

            <main className="flex gap-6">
                <section className=" border border-yellow-500 p-10 w-full rounded-xl shadow">
                    <p className="text-gray-500  ">PERSONAL</p>
                    <p className="text-gray-500  my-4"> <span className=" text-black font-bold">EMAIL: </span> <span className='ml-3'>khawarsultan@gmail.com</span> </p>
                    <p className="text-gray-500  my-4"> <span className=" text-black font-bold">USERNAME: </span> <span className='ml-3'>Khawar Sultan</span>  </p>
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
                <section className=" border border-yellow-500 p-10 w-full rounded-xl shadow">
                    <p className="text-gray-500 ">USER HISTORY</p>
                    <p className="text-gray-500  my-4"> <span className=" text-black font-bold">USER SINCE: </span> <span className='ml-3'>Oct 2023</span> </p>
                    <p className="text-gray-500  my-4"> <span className=" text-black font-bold">USER PURCHASES: </span><span className='ml-3'>  54</span></p>
                    <p className="text-gray-500"> <span className=" text-black font-bold">COST OF PURCHASES: </span><span className='ml-3'> 240 $</span></p>
                </section>

            </main>
        </div>
    )
}

export default UserPage