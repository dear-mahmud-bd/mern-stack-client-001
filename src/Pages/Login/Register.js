import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin =() =>{
        navigate('/login');
    }
    return (
        <div>
            <form action="" method="POST">
                <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-10 py-12 px-4 sm:px-6 lg:px-8">
                    <div>
                        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register now </h1>
                    </div>
                    <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600 mb-1" for="email">Your Name</label>
                            <input className="border rounded-md bg-white px-3 py-2" type="text" name="name" id="name" placeholder="Enter your Name" required />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600 mb-1" for="email">Email Address</label>
                            <input className="border rounded-md bg-white px-3 py-2" type="email" name="email" id="email" placeholder="Enter your Email Address" required />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600 mb-1" for="password">Password</label>
                            <input className="border rounded-md bg-white px-3 py-2" type="password" name="password" id="password" placeholder="Enter your Password" required />
                        </div>
                        <div>
                            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white hover:rounded-full rounded-md p-2">Register</button>
                        </div>
                        <div className=" text-center">
                            <div>
                                <p>Already have an account? <Link to='/login' onClick={navigateLogin} className=' underline cursor-pointer text-yellow-700'>Please Login</Link></p>
                            </div>
                        </div>
                        <div className="relative pb-2">
                            <div className="absolute top-0 left-0 w-full border-b"></div>
                            <div className="absolute -top-3 left-0 w-full text-center">
                                <span className="bg-white text-gray-500 px-3">or continue via</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-0 gap-3 text-xl">
                        <button className="border-2 rounded-md p-3 text-center cursor-pointer border-yellow-500 text-yellow-600 hover:border-yellow-500 hover:bg-yellow-600 hover:text-yellow-100 hover:rounded-full flex justify-center items-center">
                            <FaGoogle/>oogle
                            </button>
                        </div>
                    </div>
                </main>
            </form>
        </div>
    );
};

export default Register;