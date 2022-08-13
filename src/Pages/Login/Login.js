import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogin';
import Loading from '../Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');

    const navigate = useNavigate();

    const location = useLocation();
    ;
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [
        sendPasswordResetEmail,
        sending,
        error1
    ] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <Loading />
    }
    if (error || error1) {
        if (error) {
            errorElement = <p className='font-bold text-center text-red-600 py-1 bg-red-300 rounded-lg drop-shadow-lg'> Password is not correct</p>
        } else {
            errorElement = <p className='font-bold text-center text-red-600 py-1 bg-red-300 rounded-lg drop-shadow-lg'>{error1.message}</p>
        }
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    };









    // Reset Password Part ...
    const resetPassword = async (event) => {
        const email = emailRef.current.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Send you a Mail');
        }
        else {
            toast('Please enter Your email');
        }
    };
    return (
        <div>
            <div className="min-h-[75vh] flex flex-col items-center justify-center bg-primary space-y-10 py-2 px-4 sm:px-6 lg:px-8">
                <h1 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Welcome Back</h1>
                <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
                    <form onSubmit={handleLogin} className="max-w-md w-full mx-aut space-y-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600 mb-1" >Email Address</label>
                            <input className="border rounded-md bg-white px-3 py-2" type="email" name="email" id="email" placeholder="Enter your Email Address" ref={emailRef} required />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600 mb-1" >Password</label>
                            <input className="border rounded-md bg-white px-3 py-2" type="password" name="password" id="password" placeholder="Enter your Password" required />
                        </div>
                        <div className="flex justify-between text-sm">
                            <div className="flex items-center space-x-2">
                                <input className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded" type="checkbox" name="remember" id="remember" />
                                <label >Remember me</label>
                            </div>
                            <button className="text-yellow-500 background-transparent outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={resetPassword} >
                                Forgot your Password?
                            </button>
                        </div>
                        {errorElement}
                        <div>
                            <input className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-xl hover:rounded-full cursor-pointer rounded-md p-2" type="submit" value='Log in' />
                        </div>
                    </form>
                    {/* Account Log in */}
                    <div className=" text-center">
                        <div>
                            <p>Don't have a account? <Link to='/register' className=' underline cursor-pointer text-yellow-700'>Register now</Link></p>
                        </div>
                    </div>
                    <GoogleLogin></GoogleLogin>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;