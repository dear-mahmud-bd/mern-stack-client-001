import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const navigateRegister = () =>{
        navigate('/register');
    }
    return (
        <div>
            <form>
                <main class="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-10 py-12 px-4 sm:px-6 lg:px-8">
                    <div>
                        <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome Back</h1>
                    </div>
                    <div class="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
                        <div class="flex flex-col">
                            <label class="text-sm font-bold text-gray-600 mb-1" for="email">Email Address</label>
                            <input class="border rounded-md bg-white px-3 py-2" type="text" name="email" id="email" placeholder="Enter your Email Address" required />
                        </div>
                        <div class="flex flex-col">
                            <label class="text-sm font-bold text-gray-600 mb-1" for="password">Password</label>
                            <input class="border rounded-md bg-white px-3 py-2" type="password" name="password" id="password" placeholder="Enter your Password" required />
                        </div>
                        <div class="flex justify-between text-sm">
                            <div class="flex items-center space-x-2">
                                <input class="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded" type="checkbox" name="remember" id="remember" />
                                <label for="remember">Remember me</label>
                            </div>
                            <div class="text-yellow-600 cursor-pointer">
                                Forgot your Password?
                            </div>
                        </div>
                        <div>
                            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-xl hover:rounded-full rounded-md p-2">Log in</button>
                        </div>
                        <div className=" text-center">
                            <div>
                                <p>Don't have a account? <Link to='/register' onClick={navigateRegister} className=' underline cursor-pointer text-yellow-700'>Register now</Link></p>
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

export default Login;