/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Stepper = () => {
    const [timer, setTimer] = useState(30); // Initial timer limit value in seconds (5 minutes)
    const [running, setRunning] = useState(false);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        let interval;
        if (running && !paused && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (!paused || timer === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running, paused, timer]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const handleStartPause = () => {
        if (!running || paused) {
            setRunning(true);
            setPaused(false);
        } else {
            setPaused(true);
        }
    };

    const handleReset = () => {
        setRunning(false);
        setPaused(false);
        setTimer(300); // Reset timer limit value to initial value (5 minutes)
    };

    const handleIncrement = () => {
        setTimer((prevTimer) => prevTimer + 60); // Increment timer limit value by 1 minute
    };

    const handleDecrement = () => {
        if (timer > 60) {
            setTimer((prevTimer) => prevTimer - 60); // Decrement timer limit value by 1 minute
        }
    };

    return (
        <div className="flex  items-center justify-center bg-slate-700  ">
            <button
                className=" text-white rounded-full  p-2 bg-grad"
                onClick={handleDecrement}
                disabled={running || timer === 0 || timer === 60}
            >
                <FaMinus />
            </button>
            <div className="timer-block">
                <h1 className="text-4xl font-bold">{formatTime(timer)}</h1>
            </div>
            <button
                className=" text-white  rounded-full  p-2 bg-grad"
                onClick={handleIncrement}
                disabled={running || timer === 0}
            >
                <FaPlus />
            </button>
            {/* <div className="flex">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={handleStartPause}
                    disabled={timer === 0}
                >
                    {running && !paused ? <FiPause className="mr-2" /> : <FiPlay className="mr-2" />}
                    {running && !paused ? 'Pause' : 'Start'}
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={handleReset}>
                    Reset
                </button>
            </div> */}




        </div>
    );
};

export default Stepper;
