import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import NotFound from "../../image/NotFound.svg";
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const DeleteItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleItemDelete = id => {
        const typing = prompt('If you really want to delete? Please type "CONFIRM" \nThen click OK to proceed');
        if (typing === null) {
            toast("Thanks for not deleting");
        } else if (typing === "CONFIRM") {
            const proceed = window.confirm('Click OK to Proceed');
            if (proceed) {
                const url = `http://localhost:5000/food/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = products.filter(product => product._id !== id);
                            setProducts(remaining);
                            toast('The item has been deleted');
                        }
                    })
            } else{
                toast('The item not deleted');
            }
        } else {
            toast("Write 'CONFIRM' correctly");
        }
    };

    return (
        <div className="w-full mb-6 flex justify-center">
            <div className="w-full flex items-center gap-3  my-6 scroll-smooth overflow-x-hidden flex-wrap justify-center">
                {
                    products.length > 0 ?
                        products.map((item) => (
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
                                    <motion.button onClick={() => handleItemDelete(item?._id)} whileTap={{ scale: 0.75 }} className='w-14 h-14 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md mr-3 mb-6'>
                                        <MdDeleteForever className='text-white font-bold text-3xl' />
                                    </motion.button>
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
    );
};

export default DeleteItem;