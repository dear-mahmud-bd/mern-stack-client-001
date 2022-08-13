import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Shared/Product';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <>
            <div className="w-full flex items-center justify-center mt-12">
                <p className=" text-2xl md:text-4xl lg:text-5xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-[300px] md:before:w-[448px] lg:before:w-[597px] before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                    Our fresh & healthy food
                </p>
            </div>
            <div className="w-full my-6 flex justify-center">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        products.slice(0, 6).map(product => <Product key={product.id} product={product} />)
                    }
                </div>
            </div>
            <Link to='allitem' className='mb-16'>
                <span className="p-3 font-bold text-gray-500 hover:text-white border-2 border-orange-500 rounded-md text-base hover:bg-orange-500 hover:border-orange-400 cursor-pointer">
                    SEE MORE
                </span>
            </Link>
        </>
    );
};

export default Products;