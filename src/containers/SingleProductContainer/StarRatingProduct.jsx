/* eslint-disable react/prop-types */
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function StarRatingProduct({ rating }) {
    const stars = [];

    // Add yellow stars based on rating
    for (let i = 0; i < rating; i++) {
        stars.push(<AiFillStar key={i} className='text-yellow-400' size={18} />);
    }

    // Add gray stars to fill up to 5
    for (let i = rating; i < 5; i++) {
        stars.push(<AiOutlineStar key={i} className='text-gray-300' size={18} />);
    }

    return (
        <span className='flex items-center gap-1'>
            {stars}
        </span>
    );
}

export default StarRatingProduct;
