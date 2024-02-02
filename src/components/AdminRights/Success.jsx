/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/AppContext';
import { IoMdArrowForward } from "react-icons/io";

const Success = ({ title }) => {
    const { setThankyou } = useContext(Context)
    const Navigate = useNavigate();
    return (
        <>

            <section className="relative  py-[6.8rem]">
                <div className="w-[calc(100%_-_3rem)] mx-auto max-w-lg sm:max-w-3xl text-center">
                    <svg
                        className="h-24 w-24 inline-block text-teal-600 fill-current leading-none shrink-0 mb-4"
                        viewBox="0 0 96 96"
                        aria-hidden="true"
                    >
                        <g fill="currentColor">
                            <circle cx={48} cy={48} r={48} opacity=".1" />
                            <circle cx={48} cy={48} r={31} opacity=".2" />
                            <circle cx={48} cy={48} r={15} opacity=".3" />
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M40 48.5l5 5 11-11"
                            />
                            <path
                                transform="rotate(25.474 70.507 8.373)"
                                opacity=".5"
                                d="M68.926 4.12h3.159v8.506h-3.159z"
                            />
                            <path
                                transform="rotate(-52.869 17.081 41.485)"
                                opacity=".5"
                                d="M16.097 36.336h1.969v10.298h-1.969z"
                            />
                            <path
                                transform="rotate(82.271 75.128 61.041)"
                                opacity=".5"
                                d="M74.144 57.268h1.969v7.547h-1.969z"
                            />
                            <circle cx="86.321" cy="41.45" r="2.946" opacity=".5" />
                            <circle cx="26.171" cy="78.611" r="1.473" opacity=".5" />
                            <circle cx="49.473" cy="9.847" r="1.473" opacity=".5" />
                            <circle cx="10.283" cy={63} r="2.946" opacity=".2" />
                            <path
                                opacity=".4"
                                d="M59.948 88.142l10.558-3.603-4.888-4.455-5.67 8.058z"
                            />
                            <path
                                opacity=".3"
                                d="M18.512 19.236l5.667 1.456.519-8.738-6.186 7.282z"
                            />
                        </g>
                    </svg>
                    <div>
                        <h1 className="text-4xl leading-tight font-semibold mb-1">Thank you!</h1>
                        <p className="text-gray-500 mb-5 leading-snug ">
                            Your <span className="text-indigo-700 font-bold  "> {title}  </span> has been uploaded
                        </p>
                        <span
                            className="cursor-pointer text-indigo-700 font-bold   bg-indigo-100 hover:bg-indigo-200 transition-all ease-in px-3 py-2 rounded-full"
                            onClick={() => {
                                Navigate('/');
                                setThankyou(false);
                            }}
                        >
                            Continue shopping <IoMdArrowForward/>
                        </span>

                    </div>
                </div>
            </section>




        </>
    )
}

export default Success