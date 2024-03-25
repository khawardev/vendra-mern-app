/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function StarsRating({ onChange }) {
    const [rating, setRating] = useState(0);

    const handleStarClick = (index) => {
        setRating(index + 1);
        onChange(index + 1); // Pass the selected rating to the parent component
    };
    useEffect(() => {
        setRating(0)
    }, []);

    return (
        <>
        
        <div className="flex items-center justify-center gap-1 select-none">
            {[...Array(5)].map((_, index) => (
                rating > index ? (
                    <AiFillStar key={index} className='text-yellow-400 cursor-pointer' size={18} onClick={() => handleStarClick(index)} />
                ) : (
                    <AiOutlineStar key={index} className='text-gray-300 cursor-pointer' size={18} onClick={() => handleStarClick(index)} />
                )
            ))}

            </div>

                    </>
    );
}

export default StarsRating;
