import { useEffect, useState } from "react";
import { MdOutlineDeleteSweep } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';

function Rightbar() {
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

    const deleteUser = (userId) => {
        // Implement the logic to delete a user here
        console.log(`Delete user with ID ${userId}`);
    };

    return (
        <div className="relative overflow-x-auto bg-gray-100 rounded-2xl p-8">
            <p className='my-4 text-2xl font-extrabold ml-1'>Registered Users</p>
            <table className="w-full text-sm text-left">
                <thead>
                    <tr>
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">USERNAME</th>
                        <th className="px-6 py-4">EMAIL</th>
                        <th className="px-6 py-4">PASSWORD</th>
                        <th className="px-6 py-4">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={user._id} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
                            <td className="px-6 py-4 font-medium text-gray-900">{user._id}</td>
                            <td className="px-6 py-4">{user.username}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">{user.password}</td>
                            <td className="text-white flex px-6 py-3 gap-2">
                                <button
                                    href="#"
                                    className="font-medium bg-blue-500 rounded py-1 px-3"
                                    onClick={() => console.log(`Edit user with ID ${user._id}`)}
                                >
                                    <span className='flex justify-between items-center gap-2'><BiEditAlt size={16} />Edit</span>
                                </button>
                                <button
                                    href="#"
                                    className="font-medium bg-red-500 rounded py-1 px-3"
                                    onClick={() => deleteUser(user._id)}
                                >
                                    <span className='flex justify-between items-center gap-1'><MdOutlineDeleteSweep size={18} />Delete</span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Rightbar;
