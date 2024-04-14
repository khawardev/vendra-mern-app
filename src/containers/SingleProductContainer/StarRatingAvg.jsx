/* eslint-disable react/prop-types */
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function StarRatingAvg({ reviews }) {
    // Calculate average rating
    const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;

    // Render stars based on average rating
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(averageRating)) {
            stars.push(<AiFillStar key={i} className='text-yellow-400' size={18} />);
        } else {
            stars.push(<AiOutlineStar key={i} className='text-gray-300' size={18} />);
        }
    }

    return (
        <span className='flex items-center gap-1'>
            {stars}
        </span>
    );
}

export default StarRatingAvg;
