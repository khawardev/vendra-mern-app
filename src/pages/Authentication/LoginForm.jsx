/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// LoginForm.js
import React from "react";
import HCaptcha from "react-hcaptcha";
const LoginForm = ({ formData, handleChange, handleHCaptchaVerify, handleSubmit }) => (
    <>
        <p className=" text-2xl mb-10 font-bold text-center  ">Sign in</p>

        <div className="mb-5 ">
            <label
                className="block text-gray-700 text-sm  mb-1"
                htmlFor="login-username-email"
            >
                Username or Email Address
            </label>
            <input
                className=" appearance-none border rounded w-full py-2 px-3  focus:border-yellow-500 focus:border  outline-none"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username or Email Address"
            />
        </div>
        <div className="mb-7">
            <label
                className="block text-gray-700 text-sm  mb-1"
                htmlFor="password"
            >
                Password
            </label>
            <input
                className=" text-xs appearance-none border rounded w-full py-3 px-3  focus:border-yellow-500 focus:border  outline-none"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />

        </div>
        <HCaptcha
            sitekey="fe5c1dc3-8d54-4667-b450-1a035da75880" // Replace with your hCaptcha site key
            onVerify={handleHCaptchaVerify}
        /> 
        <div className="mb-3">
            <label className="flex items-center hover:cursor-pointer text-gray-500 font-bold mb-2">
                <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="rememberMe"
                    onChange={handleChange}
                />
                <span className="text-sm">Remember me</span>
            </label>
            <button
                className=" mb-3 w-full bg-yellow-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleSubmit}
            >
                Login
            </button>
            <p className=" text-blue-500 hover:underline  ">
                <a className="text-blue-500" href="#">
                    Lost your password?
                </a>
            </p>
        </div>
    </>
);

export default LoginForm;
