import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaGoogle } from 'react-icons/fa';
import auth from '../../firebase.init';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='space-y-4'>
            <div className="relative pb-2">
                <div className="absolute top-0 left-0 w-full border-b"></div>
                <div className="absolute -top-3 left-0 w-full text-center">
                    <span className="bg-white text-gray-500 px-3">or continue via</span>
                </div>
            </div>
            <div className="grid grid-cols-0 gap-3 text-xl">
                <button onClick={()=>signInWithGoogle()} className="border-2 rounded-md p-3 text-center cursor-pointer border-yellow-500 text-yellow-600 hover:border-yellow-500 hover:bg-yellow-600 hover:text-yellow-100 hover:rounded-full flex justify-center items-center">
                    <FaGoogle />oogle
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;