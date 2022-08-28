import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogin';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Register = () => {
    // useRef('') is not used is this page... 
    const passRef = useRef('');
    const confirmPassRef = useRef('');

    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const [token] = useToken(user);

    if (token) {
        navigate(from, { replace: true });
    }
    if (loading || updating) {
        return <Loading></Loading>;
    }
    if (error || error1) {
        errorElement = <p className='font-bold text-center text-red-600 py-1 bg-red-300 rounded-lg drop-shadow-lg'>{error.message}</p>
    }

    // Registration Part ...
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password === confirmPassword && agree) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            toast('Updating profile');
        } else {
            toast('Password did not match');
        }
    }

    return (
        <>
            <div className="min-h-[75vh] flex flex-col items-center justify-center bg-primary space-y-10 py-2 px-4 sm:px-6 lg:px-8">
                <h1 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Register now </h1>
                <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-7">
                    <form onSubmit={handleRegister} className="max-w-md w-full mx-aut space-y-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600 mb-1" >Your Name</label>
                            <input className="border rounded-md bg-white px-3 py-2" type="text" name="name" id="name" placeholder="Enter your Name" required />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600 mb-1" >Email Address</label>
                            <input className="border rounded-md bg-white px-3 py-2" type="email" name="email" id="email" placeholder="Enter your Email Address" required />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600 mb-1" >Password</label>
                            <input className="border rounded-md bg-white px-3 py-2" type="password" name="password" id="password" placeholder="Enter your Password" ref={passRef} required />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600 mb-1" >Confirm Password</label>
                            <input className="border rounded-md bg-white px-3 py-2" type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter your Password" ref={confirmPassRef} required />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" type="checkbox" onClick={() => setAgree(!agree)} name="terms" id="terms" />
                            <label for="remember">Accept Terms and Conditions</label>
                        </div>
                        {errorElement}
                        <div>
                            <input className={`w-full text-white rounded-md p-2 ${agree ? 'bg-yellow-500 hover:bg-yellow-600 hover:rounded-full cursor-pointer' : 'bg-yellow-300'}`} type="submit" value='Register' disabled={!agree} />
                        </div>
                    </form>
                    {/* Account Log in */}
                    <div className=" text-center">
                        <div>
                            <p>Already have an account? <Link to='/login' className=' underline cursor-pointer text-yellow-700'>Please Login</Link></p>
                        </div>
                    </div>
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </>
    );
};

export default Register;