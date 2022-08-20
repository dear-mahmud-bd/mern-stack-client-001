import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { MdAdd, MdDeliveryDining } from 'react-icons/md';

const StockUpdate = () => {
    const foodId = useParams();
    console.log(foodId)

    const [food, setFood] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/food/${foodId.id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])

    return (
        <div className="w-300 xsm:w-[480px] lg:w-[600px] cursor-pointer h-auto bg-gray-100 rounded-lg py-2 my-4 md:mt-20 backdrop-blur-lg shadow-lg hover:drop-shadow-2xl hover:-translate-y-1 duration-500 mt-20 mx-auto">
            <div className='w-full flex items-center justify-between'>
                <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={food.img} alt=""
                    className='w-40 -mt-8 xsm:w-60 xsm:-mt-12 '
                />
                <motion.button whileTap={{ scale: 0.75 }} className='w-32 h-12 rounded-full bg-green-400 flex items-center justify-center cursor-pointer hover:shadow-md mr-3 xsm:mr-10'>
                    <p className=' font-bold flex items-center text-blue-900 gap-1 select-none'>Delivery<MdDeliveryDining className='text-blue-600 font-bold text-3xl' /></p>
                </motion.button>
            </div>
            <div className='w-full flex flex-col items-center justify-end px-2'>
                <p className="text-textColor font-semibold text-xl xsm:text-3xl md:text-xl">{food.name}</p>
                <p className="mt-1 text-gray-500 text-lg">Available: {food.quantity} pitches</p>
                <div className="w-[50%] py-2 border-b border-gray-300 flex items-center gap-2 m-1">
                    <MdAdd className="text-xl text-gray-700" />
                    <input
                        type="number"
                        name='price'
                        required
                        placeholder="Add Quantity"
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <div className="flex items-center w-full">
                    <motion.input whileTap={{ scale: 0.75 }}
                        type="submit"
                        className=" md:ml-auto w-full md:w-auto mx-auto border-none outline-none bg-emerald-400 cursor-pointer hover:bg-emerald-500 hover:text-gray-200 px-12 py-2 rounded-xl text-lg text-white font-semibold"
                        value="Add Quantity"
                    />
                </div>
            </div>
        </div>
    );
};

export default StockUpdate;