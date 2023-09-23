import { useState } from "react";

const AuthPage = () => {
    const [isRegistering, setIsRegistering] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    console.log("🚀 ~ file: AuthPage.jsx:10 ~ AuthPage ~ formData:", formData)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="flex justify-center items-center  md:py-24 py-10 md:w-[35%] w-11/12 m-auto">
            <form onSubmit={handleSubmit} className="border-2 rounded-lg  w-full  md:py-16 py-10  h-[600px]   md:px-12 px-5">
                <p className="text-center text-gray-500 text-sm mb-10 select-none ">
                    <span className="font-extrabold flex justify-center items-center gap-1">
                        <span>
                            <span
                                className={`text-lg cursor-pointer  px-4 py-2 ${isRegistering ? 'text-gray-900 bg-slate-100 border rounded-full px-3 py-1' : 'text-gray-300'}`}
                                onClick={() => setIsRegistering(true)}
                            >
                                Register

                            </span>
                        </span>
                        <span>
                            <span
                                className={`text-lg cursor-pointer  px-4 py-2 ${isRegistering ? 'text-gray-300' : 'text-gray-900 bg-slate-100 border rounded-full px-3 py-1'}`}
                                onClick={() => setIsRegistering(false)}
                            >
                                Sign in
                            </span>
                        </span>

                    </span>
                </p>
                {isRegistering ? (
                    <>
                        <div className="mb-5">
                            <label className="block text-gray-700 text-sm mb-1" htmlFor="username">
                                Username
                            </label>
                            <input
                                className=" appearance-none border-2 rounded w-full py-2 px-3  focus:border-yellow-500 focus:border-2  outline-none"
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Username"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 text-sm  mb-1" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className=" appearance-none border-2 rounded w-full py-2 px-3  focus:border-yellow-500 focus:border-2  outline-none"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="mb-7">
                            <label className="block text-gray-700 text-sm  mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                className=" text-xs appearance-none border-2 rounded w-full py-3 px-3  focus:border-yellow-500 focus:border-2  outline-none"
                                type="password"
                                id="password"
                                name="password"
                                value={formData.registerpassword}
                                onChange={handleChange}
                            />
                        </div>
                    </>

                ) : (
                    <>

                        <div className="mb-5 ">
                            <label className="block text-gray-700 text-sm  mb-1" htmlFor="login-username-email">
                                Username or Email Address
                            </label>
                            <input
                                className=" appearance-none border-2 rounded w-full py-2 px-3  focus:border-yellow-500 focus:border-2  outline-none"
                                type="text"
                                id="login-username-email"
                                name="usernameOrEmail"
                                value={formData.usernameOrEmail}
                                onChange={handleChange}
                                placeholder="Username or Email Address"
                            />
                        </div>
                        <div className="mb-7">
                            <label className="block text-gray-700 text-sm  mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                className=" text-xs appearance-none border-2 rounded w-full py-3 px-3  focus:border-yellow-500 focus:border-2  outline-none"
                                type="password"
                                id="password"
                                name="password"
                                    value={formData.loginpassword}
                                onChange={handleChange}
                            />
                        </div>
                    </>

                )}





                {/* Registration */}
                {isRegistering ? (
                    <div >
                        <p className="leading-5 mb-7 text-xs text-gray-600">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className=" cursor-pointer underline">privacy policy</span> .</p>

                        <button
                            className="  w-full bg-yellow-500  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Register
                        </button>

                    </div>

                ) : (
                    <div className="mb-3">
                        <label className="block text-gray-500 font-bold mb-2">
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
                        >
                            Login
                        </button>
                        <p className=" text-gray-500 ">
                            <a className="text-blue-500" href="#">
                                Lost your password?
                            </a>
                        </p>
                    </div>
                )}

            </form>
        </div>
    );
};

export default AuthPage;
