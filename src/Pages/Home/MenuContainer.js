import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { IoFastFood } from "react-icons/io5";
import NotFound from "../../image/NotFound.svg";

const MenuContainer = () => {
    // used to set all product to compare category ...
    const [allProduct, setAllProduct] = useState({});
    useEffect(() => {
        fetch('https://limitless-shore-74673.herokuapp.com/food')
            .then(res => res.json())
            .then(data => setAllProduct(data))
    }, []);

    // used to click and showing its category product ...
    const [products, setProducts] = useState({});
    useEffect(() => {
        fetch('https://limitless-shore-74673.herokuapp.com/food')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const [filter, setFilter] = useState("chicken");

    const updateItem = item => {
        const updateContainer = allProduct.filter(product => {
            return product.category === item;
        });
        setProducts(updateContainer);
    }

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <section className="w-full my-6" id="menu">
            <div className="w-full flex flex-col items-center justify-center">
                <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                    Our Stock Product
                </p>

                <div className="w-full flex items-center justify-start lg:justify-center gap-8 pt-6 overflow-x-scroll scrollbar-none">
                    {
                        categories.map(category =>
                            <div key={category.id}
                                onClick={() => updateItem(category.urlParamName)}
                            >
                                <motion.div
                                    whileTap={{ scale: 0.75 }}

                                    className={`group ${filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                                        } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                                    onClick={() => setFilter(category.urlParamName)}
                                >
                                    <div
                                        className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName
                                            ? "bg-white"
                                            : "bg-cartNumBg"
                                            } group-hover:bg-white flex items-center justify-center`}
                                    >
                                        <IoFastFood
                                            className={`${filter === category.urlParamName
                                                ? "text-textColor"
                                                : "text-white"
                                                } group-hover:text-textColor text-lg`}
                                        />
                                    </div>
                                    <p
                                        className={`text-sm ${filter === category.urlParamName
                                            ? "text-white"
                                            : "text-textColor"
                                            } group-hover:text-white select-none`}
                                    >
                                        {category.name}
                                    </p>
                                </motion.div>
                            </div>)
                    }
                </div>

                <div className="w-full mb-6 flex justify-center">
                    <div className="w-full flex items-center gap-3  my-6 scroll-smooth overflow-x-hidden flex-wrap justify-center">
                        {
                            products.length > 0 ?
                                products.slice(0, 6).map((item) => (
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
            </div>
        </section>
    );
};

export default MenuContainer;