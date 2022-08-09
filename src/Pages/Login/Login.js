import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogin';
import Loading from '../Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const navigateRegister = () => {
        navigate('/register');
    }
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

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

    if (loading || sending) {
        return <Loading />
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    };
    // Reset Password Part ...
    const resetPassword = async (event) => {
        const email = event.target.email.value;
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
            <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-10 py-12 px-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome Back</h1>
                </div>
                <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
                    <form onSubmit={handleLogin} className="max-w-md w-full mx-aut space-y-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600 mb-1" >Email Address</label>
                            <input className="border rounded-md bg-white px-3 py-2" type="text" name="email" id="email" placeholder="Enter your Email Address" required />
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
                        <div>
                            <input className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-xl hover:rounded-full cursor-pointer rounded-md p-2" type="submit" value='Log in' />
                        </div>
                    </form>
                    {/* Account Log in */}
                    <div className=" text-center">
                        <div>
                            <p>Don't have a account? <Link to='/register' onClick={navigateRegister} className=' underline cursor-pointer text-yellow-700'>Register now</Link></p>
                        </div>
                    </div>
                    <GoogleLogin></GoogleLogin>
                </div>
                <ToastContainer></ToastContainer>
            </main>
        </div>
    );
};

export default Login;