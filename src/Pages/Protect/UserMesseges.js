import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import NotFound from '../../image/NotFound.svg';
import UserPic from '../../image/avatar.png';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const UserMesseges = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    if (loading) {
        <Loading />
    }

    const email = user?.email;
    const name = user?.displayName;

    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        const url = `https://limitless-shore-74673.herokuapp.com/feedback-message?email=${email}`;
        try {
            fetch(url, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setFeedbacks(data)
                })
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 401) {
                signOut(auth);
                navigate('/login');
            }
        }
    }, [email])

    const year = new Date().getFullYear();
    let month;
    if (new Date().getMonth() === 0) {
        month = "January"
    } if (new Date().getMonth() === 1) {
        month = "February"
    } if (new Date().getMonth() === 2) {
        month = "March"
    } if (new Date().getMonth() === 3) {
        month = "April"
    } if (new Date().getMonth() === 4) {
        month = "May"
    } if (new Date().getMonth() === 5) {
        month = "June"
    } if (new Date().getMonth() === 6) {
        month = "July"
    } if (new Date().getMonth() === 7) {
        month = "August"
    } if (new Date().getMonth() === 8) {
        month = "September"
    } if (new Date().getMonth() === 9) {
        month = "Octeber"
    } if (new Date().getMonth() === 10) {
        month = "November"
    } if (new Date().getMonth() === 11) {
        month = "December"
    }
    const date = new Date().getDate();

    const handleUserFeedback = e => {
        // e.preventDefault();
        const message = e.target.message.value;
        const details = { name: name, email: email, message, year, month, date };

        // POST data from client ...
        fetch('https://limitless-shore-74673.herokuapp.com/feedback-message', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })
            .then(res => res.json())
            .then(data => {
                toast('Send Feedback Successfully :)');
                e.target.reset();
            })
        e.target.reset();
    }

    return (
        <>
            <p className='text-center text-xl text-headingColor font-semibold mt-5 -mb-16'>My Feedback Messages ...</p>
            <div className="w-full mb-6 flex justify-center">
                <div className="w-full flex items-center gap-3  my-4 scroll-smooth overflow-x-hidden flex-wrap justify-center">
                    {
                        feedbacks?.length > 0 ?
                            feedbacks.map((feedback) => (
                                <div
                                    key={feedback?._id}
                                    className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-white rounded-lg py-2 px-4 mt-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
                                >
                                    <div className="w-full flex items-center justify-between">
                                        <motion.div
                                            className="w-12 h-12 -mt-8 ml-2 drop-shadow-2xl"
                                        >
                                            <img
                                                src={UserPic}
                                                alt=""
                                                className="w-full h-full object-contain"
                                            />
                                        </motion.div>
                                        <p className=' text-footerBg font-semibold rounded-full flex items-center justify-center mr-3 mb-6'>
                                            {feedback.month} {feedback.date}, {feedback.year}
                                        </p>
                                    </div>
                                    <div className="w-full flex flex-col items-start -mt-8">
                                        <p className="text-textColor font-semibold text-base md:text-lg">
                                            {feedback?.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {feedback?.message}
                                        </p>
                                    </div>
                                </div>
                            )) : (
                                <div className="w-full flex flex-col items-center justify-center">
                                    <img src={NotFound} className="h-340" alt='Not Found' />
                                    <p className="text-xl text-headingColor font-semibold my-2">
                                        You have not given any feedback yet.
                                    </p>
                                </div>
                            )
                    }
                </div>
            </div>
            <p className='text-center text-xl text-headingColor font-semibold mt-5 -mb-5'>Give a Feedback Message ...</p>
            <div className="flex items-center justify-center mt-8 w-[50%] mx-auto bg-slate-300 rounded-3xl p-3">
                <form onSubmit={handleUserFeedback}>
                    <div className="relative w-full mb-2">
                        <span className="p-2 text-orange-600">- Your Name</span>
                        <input type="text" name="name" className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" value={name} readOnly placeholder="FirstName LastName" style={{ transition: "all 0.15s ease 0s" }} required />
                    </div>
                    <div className="relative w-full mb-2">
                        <span className="p-2 text-orange-600">- Your Email</span>
                        <input type="email" name="email" className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" value={email} readOnly placeholder="some@example.com" style={{ transition: "all 0.15s ease 0s" }} required />
                    </div>
                    <div className="relative w-full mb-2">
                        <span className="p-2 text-orange-600">- Put Your Message</span>
                        <textarea type="text" name="message" className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full select-none" placeholder="Try to maintain the highest quality of this food ..." style={{ transition: "all 0.15s ease 0s" }} required />
                    </div>
                    <div className="text-center mt-6">
                        <input type="submit" name="submit" value="Send" className="p-3 rounded-lg bg-orange-600 outline-none text-white shadow w-32 justify-center focus:bg-orange-700 hover:bg-orange-500 cursor-pointer" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserMesseges;