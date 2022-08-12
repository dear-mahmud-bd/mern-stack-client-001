import React from 'react';
import { motion } from "framer-motion";
import { MdDeliveryDining } from 'react-icons/md';
import { GrUpdate } from 'react-icons/gr';

const Product = ({product}) => {
    return (
        <div className="w-300 md:w-[298px] xl:w-375 cursor-pointer h-auto bg-gray-100 rounded-lg py-2 my-4 md:my-9 backdrop-blur-lg shadow-lg hover:drop-shadow-2xl hover:-translate-y-1 duration-500 mx-2">
            <div className='w-full flex items-center justify-between'>
                <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={product.img} alt=""
                    className='w-40 -mt-8'
                />
                <motion.div whileTap={{ scale: 0.75 }} whileHover={{ scale: 1.3 }} className='w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center cursor-pointer hover:shadow-md mr-3'>
                    <GrUpdate className='text-white text-2xl' />
                </motion.div>
            </div>
            <div className='w-full flex flex-col items-end justify-end px-2'>
                <p className="text-textColor font-semibold text-lg md:text-xl">{product.name}</p>
                <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold '>{product.description}</p>
                <p className="mt-1 text-sm text-gray-500 ">Available: {product.quantity} pitches</p>
                <p className="mt-1 font-medium text-gray-500 flex items-center gap-2 ml-auto"><span className='text-orange-600 text-2xl'><MdDeliveryDining /></span><span className=' text-xs'>{product.supplier}</span></p>
                <div className="flex items-center gap-8">
                    <p className="text-lg text-heaingColor font-bold"><span className=' text-lg text-red-600'>$</span> {product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;