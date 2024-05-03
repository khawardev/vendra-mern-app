

/* eslint-disable react/prop-types */
import React from 'react';
import { FaPlay } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineIosShare } from "react-icons/md";

const Card = ({ image, views, likes }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className="relative overflow-hidden rounded-2xl shadow-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute top-0 left-0 p-4 gap-4 flex items-center ">
                <FaCirclePlay size={38} className=' text-white hover:cursor-pointer' />
            </div>
            <img src={image} alt="Card" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 p-4  gap-4 flex items-center">
                <section className=' flex gap-2 items-center'>
                    <FaPlay className=' text-white' />
                    <p className=' text-white font-bold text-sm'>{views}</p>
                </section>
                <section className=' flex gap-2 items-center'>
                    <FaHeart className=' text-white' />
                    <p className=' text-white font-bold text-sm'>{likes}</p>
                </section>
            </div>
            {isHovered && (
                <div className="absolute top-0 right-0 p-3 gap-4 flex items-center">
                    <section className='flex gap-2 items-center justify-center  p-1      rounded-full   bg-white/20 backdrop-blur-sm  ring-black/5'>
                        <div className='p-2   rounded-full     hover:bg-white/20 hover:cursor-pointer   hover:ring-black/5       '>
                            <FaRegHeart size={18} className=' text-white' stroke-width={2} />
                        </div>
                        <div className='p-2  rounded-full hover:bg-white/20 hover:cursor-pointer    hover:ring-black/5'>
                            <MdOutlineIosShare size={18}  className=' text-white' />
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

const AshanCardHover = () => {
    return (

        <div className="flex w-8/12 m-auto justify-center items-center h-screen">
            <div className="grid grid-cols-3 gap-4">
                <Card
                    image="https://api.riffusion.com/storage/v1/object/public/images/private/29cdb7e8-543c-4c3e-825a-97ee5a7e0c3a.jpg"
                    views={100}
                    likes={20}
                />
                <Card
                    image="https://api.riffusion.com/storage/v1/object/public/images/private/5fdf4f03-0eaf-460e-a57f-f2031078fe5a.jpg"
                    views={100}
                    likes={20}
                />
                <Card
                    image="https://api.riffusion.com/storage/v1/object/public/images/private/73e32751-0294-4fd4-ba2e-1f66059273f7.jpg"
                    views={100}
                    likes={20}
                />
              
            </div>
        </div>
    );
};

export default AshanCardHover;
