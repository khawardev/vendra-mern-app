/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import StarsRating from './StarsRating'
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addReview } from '../../toolkit/Slices/ReviewSlice'
import { CiCirclePlus } from "react-icons/ci";

const Modal = ({ isOpen, onClose, productid }) => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const formatDate = () => {
            const date = new Date();
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-US', options);
            setCurrentDate(formattedDate);
        };

        formatDate();
    }, []);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            productid: productid,
            name: name,
            // title: title,
            review: review,
            rating: rating,
            currentDate: currentDate
            
        };
        dispatch(addReview(formData));
        setName('');
        // setTitle('');
        setReview('');
        setRating(0);
        onClose(); // Close the form

    };

   







    return (
        <div className={`fixed inset-0  z-50 flex items-center  justify-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="fixed inset-0   z-50 bg-black opacity-60 transition-opacity"></div>
            <div className="bg-white p-8 w-[80%] rounded-md z-50 transition-opacity">
                <div className='flex justify-end items-end'>
                    <button className=" px-4 py-3 bg-gray-100 hover:bg-gray-200  rounded-md" onClick={onClose}><IoClose size={20} /></button>
                </div>
                <p className='text-center text-3xl font-bold'>Add a Review</p>
                <div className='flex gap-10 my-3 justify-center items-center'>
                    <p>Assessment</p>
                    <StarsRating onChange={handleRatingChange} />
                    <p>{rating} out of 5 stars</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name*</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            placeholder="Title"
                            value={title}

                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div> */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">Review*</label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="review"
                            cols="30"
                            rows="10"
                            placeholder="Review"
                            value={review}
                            required
                            onChange={(e) => setReview(e.target.value)}
                        ></textarea>
                    </div>
                    
                    <button type='submit' className="px-4 py-2 bg-blue-800 hover:bg-blue-900 font-bold  transition-all ease-in text-white rounded-md">Submit</button>
                </form>
            </div>

        </div>
    );
};


const ReviewsModal = ({ productid }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div >
            {/* <p onClick={handleOpenModal} className='font-bold border px-2 py-1 rounded-full bg-gray-100 cursor-pointer flex gap-1 justify-center items-center'>
                <FiPlus strokeWidth={3} /> Add Review
            </p> */}
            <p className=" cursor-pointer text-indigo-700 flex items-center  font-bold   bg-indigo-100 gap-2  transition-all ease-in px-4 py-2 rounded-full"
                onClick={handleOpenModal}  >
                Add Review <CiCirclePlus strokeWidth={1.5} className=' opacity-100' size={16} />
            </p>
            <Modal productid={productid} isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default ReviewsModal
