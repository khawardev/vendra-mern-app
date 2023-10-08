/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const ApiController = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    
    const [password, setPassword] = useState('asas');
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    return (
        <div className=" w-11/12 m-auto py-16 px-12 border">


            <p className=" text-lg text-gray-500 ">Manage Your account</p>
            <p className=" text-2xl my-3 font-bold ">Your account details</p>
            <p className=" text-lg text-gray-500">Click <span className=" text-black hover:cursor-pointer">here</span> to edit your information</p>

            <p className=" text-xl my-10 ">Account details</p>

            <main className="flex gap-6">
                <section className=" border p-10 w-full">
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
                <section className=" border p-10 w-full">
                    <p className="text-gray-500 ">USER HISTORY</p>
                    <p className="text-gray-500  my-4"> <span className=" text-black font-bold">User Since: </span> <span className='ml-3'>Oct 2023</span> </p>
                    <p className="text-gray-500  my-4"> <span className=" text-black font-bold">USER PURCHASES: </span><span className='ml-3'>  54</span></p>
                    <p className="text-gray-500"> <span className=" text-black font-bold">VALUE OF PURCHASES: </span><span className='ml-3'> 240$</span></p>
                </section>

            </main>
        </div>
    )
}

export default ApiController