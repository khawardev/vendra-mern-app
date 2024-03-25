/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import StarsRating from './StarsRating'
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const formData = {
            name: name,
            title: title,
            review: review,
            rating: rating
        };
        console.log(formData); // Do something with the form data, e.g., send it to a server
        onClose(); // Close the form
        setName('');
        setTitle('');
        setReview('');
        setRating(0);
    };
    return (
        <div className={`fixed inset-0  z-50 flex items-center  justify-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="fixed inset-0   z-50 bg-black opacity-60 transition-opacity"></div>

            <div className="bg-white p-8 w-[80%] rounded-md z-50 transition-opacity">
                <div className='flex justify-end items-end'>
                    <button className=" px-4 py-2 bg-gray-700 text-white rounded-md" onClick={onClose}>Close</button>

                </div>
                <p className='text-center text-3xl'>Write Review</p>
                <div className='flex gap-10 my-3 justify-center items-center'>
                    <p>Assessment</p>
                    <StarsRating onChange={handleRatingChange} />
                    <p>{rating} out of 5 stars</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">Review</label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="review"
                            cols="30"
                            rows="10"
                            placeholder="Review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        ></textarea>
                    </div>
                    
                    <button type='submit' className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-all ease-in text-white rounded-md">Done</button>
                </form>
            </div>

        </div>
    );
};


const ReviewsModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div >
            <p onClick={handleOpenModal} className='font-bold border px-2 py-1 rounded-full bg-gray-100 cursor-pointer flex gap-1 justify-center items-center'>
                <FiPlus strokeWidth={3} /> Write Review
            </p>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default ReviewsModal
