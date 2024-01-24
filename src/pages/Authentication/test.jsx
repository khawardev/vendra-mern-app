/* eslint-disable no-unused-vars */
// AuthPage.js
import React, { useState } from "react";
import Swal from "sweetalert2";
import HCaptcha from "react-hcaptcha";
import { processForm, clearFormData } from "./api";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const AuthPage = () => {
    const [isRegistering, setIsRegistering] = useState(true);
    console.log(isRegistering)
    const [hCaptchaToken, setHCaptchaToken] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
    const handleHCaptchaVerify = (token) => setHCaptchaToken(token);
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    console.log(submittedData)

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        clearFormData(setFormData);
        const { username, email, password } = formData;
        const url = isRegistering ? "http://localhost:5000/register" : "http://localhost:5000/login-user";
        // const requestBody = JSON.stringify({ username, email, password, hCaptchaToken });
        const requestBody = isRegistering
            ? JSON.stringify({ username, email, password, hCaptchaToken })
            : JSON.stringify({ username, password: password, hCaptchaToken: hCaptchaToken });
        processForm(url, requestBody);
    };

    return (
        <div className="flex flex-col justify-center items-center md:py-24 py-10 md:w-[35%] w-11/12 m-auto">
            <div className="  w-11/12   ">
                <div className="font-extrabold flex justify-between  gap-2 px-[5px] py-[4px]  text-center text-gray-500  bg-slate-100 md:border   rounded-full text-sm mb-10 select-none ">
                    <div
                        className={`text-lg cursor-pointer w-full justify-center flex items-center  px-4 py-2 ${isRegistering ? "text-gray-900 bg-slate-200 md:border rounded-full px-3 py-1" : "text-gray-500"}`}
                        onClick={() => setIsRegistering(true)}>
                        Register
                    </div>
                    <div
                        className={`text-lg cursor-pointer  w-full justify-center flex items-center  px-4 py-2 ${isRegistering ? "text-gray-500" : "text-gray-900 bg-slate-200 md:border rounded-full px-3 py-1"}`}
                        onClick={() => setIsRegistering(false)}>
                        Sign in
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="md:border  rounded-lg  w-full  py-10    md:px-12 px-5">
                {isRegistering ? (
                    <RegisterForm
                        formData={formData}
                        handleChange={handleChange}
                        handleHCaptchaVerify={handleHCaptchaVerify}
                        handleSubmit={handleSubmit}
                    />
                ) : (
                    <LoginForm
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleHCaptchaVerify={handleHCaptchaVerify}
                    />
                )}
            </form>
        </div>
    );
};

export default AuthPage;
