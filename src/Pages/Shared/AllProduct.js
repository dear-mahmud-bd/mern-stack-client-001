import React, { useEffect, useState } from 'react';
import Product from './Product';

const AllProduct = () => {
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
                        products.map(product => <Product key={product.id} product={product} />)
                    }
                </div>
            </div>
        </>
    );
};

export default AllProduct;