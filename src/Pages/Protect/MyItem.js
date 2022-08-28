import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import NotFound from '../../image/NotFound.svg';

const MyItem = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        <Loading />
    }

    const email = user?.email;

    const [myItem, setMyItem] = useState([]);
    useEffect(() => {
        fetch(`https://limitless-shore-74673.herokuapp.com/food?email=${email}`)
            .then(res => res.json())
            .then(data => setMyItem(data))
    }, [email])


    return (
        <>
            <h1 className='text-center mt-5 text-3xl'>My Adding Items</h1>
            <div className="w-full mb-6 flex justify-center">
                <div className="w-full flex items-center gap-3  my-6 scroll-smooth overflow-x-hidden flex-wrap justify-center">
                    {
                        myItem.length > 0 ?
                            myItem.map((item) => (
                                <div
                                    key={item?._id}
                                    className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-white rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
                                >
                                    <div className="w-full flex items-center justify-between">
                                        <motion.div
                                            className="w-40 h-40 -mt-8 drop-shadow-2xl"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <img
                                                src={item?.img}
                                                alt=""
                                                className="w-full h-full object-contain"
                                            />
                                        </motion.div>
                                    </div>
                                    <div className="w-full flex flex-col items-end justify-end -mt-8">
                                        <div className="flex items-center gap-8">
                                            <p className="text-lg text-headingColor font-semibold">
                                                <span className="text-sm text-red-500">$</span> {item?.price}
                                            </p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {item?.description}
                                        </p>
                                        <p className="text-textColor font-semibold text-base md:text-lg">
                                            {item?.name}
                                        </p>
                                    </div>
                                </div>
                            )) : (
                                <div className="w-full flex flex-col items-center justify-center">
                                    <img src={NotFound} className="h-340" alt='Not Found' />
                                    <p className="text-xl text-headingColor font-semibold my-2">
                                        Items Not Available
                                    </p>
                                </div>
                            )
                    }
                </div>
            </div>
        </>
    );
};

export default MyItem;