/* eslint-disable no-undef */

import  { useState } from 'react';
import Resizing from './Resizing';
const Resizecall = () => {
    const [processedImage, setProcessedImage] = useState(null);

    const handleImageProcessing = async () => {
        try {
            const imageUrl = 'https://res.cloudinary.com/denajbnh4/image/upload/v1694855748/slider-banner-7_eoqvvv.jpg';
            const processedBuffer = await Resizing(imageUrl);
            setProcessedImage(processedBuffer);
        } catch (error) {
            console.error('Error processing image:', error);
        }
    };

    return (
        <div>
            Hello1
            <button onClick={handleImageProcessing}>Process Image</button>
            <img src="https://res.cloudinary.com/denajbnh4/image/upload/v1694855748/slider-banner-7_eoqvvv.jpg" alt="" />
            {processedImage && <img src={`data:image/jpeg;base64,${Buffer.from(processedImage).toString('base64')}`} alt="Processed Image" />}
        </div>
    );
}

export default Resizecall

