import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import GoogleLogin from './GoogleLogin';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile();

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
        toast('Updating profile');
    }


    return (
        <div>
            <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-10 py-12 px-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register now </h1>
                </div>
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
                            <input className="border rounded-md bg-white px-3 py-2" type="password" name="password" id="password" placeholder="Enter your Password" required />
                        </div>
                        {/* <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600 mb-1" >Confirm Password</label>
                            <input className="border rounded-md bg-white px-3 py-2" type="password" name="confirm-password" id="confirmPassword" placeholder="Confirm your Password" required />
                        </div> */}
                        <div>
                            <input className="w-full bg-yellow-500 hover:bg-yellow-600 text-white hover:rounded-full rounded-md p-2" type="submit" value='Register' />
                        </div>
                    </form>
                    {/* Account Log in */}
                    <div className=" text-center">
                        <div>
                            <p>Already have an account? <Link to='/login' onClick={navigateLogin} className=' underline cursor-pointer text-yellow-700'>Please Login</Link></p>
                        </div>
                    </div>
                    <GoogleLogin></GoogleLogin>
                </div>
            </main>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;