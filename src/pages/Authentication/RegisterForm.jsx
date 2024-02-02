/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// RegisterForm.js
import React from "react";
import HCaptcha from "react-hcaptcha";

const RegisterForm = ({ formData, handleChange, handleHCaptchaVerify, handleSubmit }) => (
    <>
        <p className=" text-2xl   mb-10 font-bold   text-center  ">Register</p>
        <div className="mb-5">
            <label
                className="block text-gray-700 text-sm mb-1"
                htmlFor="username"
            >
                Username
            </label>
            <input
                className=" appearance-none border rounded w-full py-2 px-3  focus:border-yellow-500 focus:border  outline-none"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
            />
        </div>
        <div className="mb-5">
            <label
                className="block text-gray-700 text-sm  mb-1"
                htmlFor="email"
            >
                Email Address
            </label>
            <input
                className=" appearance-none border rounded w-full py-2 px-3  focus:border-yellow-500 focus:border  outline-none"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
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

        <div>
            <p className="leading-5 mb-7 text-xs text-gray-600">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and for
                other purposes described in our{" "}
                <span className=" cursor-pointer underline">privacy policy</span>{" "}
                .
            </p>

            <button
                className="  w-full bg-yellow-500  font-bold   py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleSubmit}
            >
                Register
            </button>
        </div>
    </>
);

export default RegisterForm;
