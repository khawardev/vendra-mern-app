/* eslint-disable no-undef */
// api.js
import Swal from "sweetalert2";

export const processForm = (url, requestBody, setHCaptchaToken) => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: requestBody,
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(url.includes("register") ? "Registration failed" : "Login failed");
            }
        })
        .then((data) => handleResponse(data, setHCaptchaToken))
        .catch((error) => {
            console.error(error);
            // Handle the error and display an error message to the user
        });
};

export const handleResponse = (data, setHCaptchaToken) => {
    console.log("Server Response Data:", data);

    if (data.status.includes("ok") && !url.includes("register")) {
        handleLoginSuccess(data);
    } else if (url.includes("register") && data.status.includes("ok")) {
        handleRegistrationSuccess(setHCaptchaToken);
    } else {
        alert("Login or Registration Failed");
        // Handle cases where login or registration fails
    }
};

export const handleLoginSuccess = (data) => {
    Swal.fire("Successfully Login", "success");
    localStorage.setItem("token", data.data);
    localStorage.setItem("role", data.role);
    localStorage.setItem("loggedIn", true);

    if (data.role === "admin") {
        console.log("Redirecting to admin-account page...");
        window.location.href = "/";
    } else {
        console.log("Redirecting to user-account page...");
        window.location.href = "/uploadcare";
    }
};

export const handleRegistrationSuccess = (setHCaptchaToken) => {
    Swal.fire("Successfully Registered", "success");
    setHCaptchaToken('');
};

export const clearFormData = (setFormData) => {
    setFormData({
        username: "",
        email: "",
        password: "",
    });
};
