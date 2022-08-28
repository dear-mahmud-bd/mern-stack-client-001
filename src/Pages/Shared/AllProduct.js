import React, { useEffect, useState } from 'react';
import Product from './Product';
import NotFound from '../../image/NotFound.svg';

const AllProduct = () => {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);

    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        fetch('https://limitless-shore-74673.herokuapp.com/foodCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / size);
                setPageCount(pages);
            })
    }, [size])

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://limitless-shore-74673.herokuapp.com/food?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size]); // here, Dependency means that any one of the two changes {[page, size]} will hit the API ( https://limitless-shore-74673.herokuapp.com/food?page=${page}&size=${size} )...

    return (
        <>
            {
                products?.length > 0 ?
                    <>
                        <div className="w-full flex items-center justify-center mt-1">
                            <p className=" text-2xl md:text-4xl lg:text-5xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-[300px] md:before:w-[448px] lg:before:w-[597px] before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                                Our fresh & healthy food
                            </p>
                        </div>
                        <div className="w-full my-6 flex justify-center">
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {
                                    products.map(product => <Product key={product._id} product={product} />)
                                }
                            </div>
                        </div>
                        <div className='text-center mb-10'>
                            {
                                [...Array(pageCount).keys()].map(number =>
                                    <button onClick={() => setPage(number)} key={number} className={`${number === page ? "bg-red-600 text-white" : "bg-white"} bg-white drop-shadow-lg w-7 rounded-md mx-5 hover:bg-red-500 hover:text-white`}>
                                        {number + 1}
                                    </button>)
                            }
                            <select onChange={e => setSize(e.target.value)} className='bg-white drop-shadow-lg w-10 h-6 rounded-md cursor-pointer mx-10'>
                                <option value="6" >6</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                    </> : (
                        <div className="w-full flex flex-col items-center justify-center mt-32">
                            <img src={NotFound} className="h-340" alt='Not Found' />
                            <p className="text-xl text-headingColor font-semibold my-2">
                                Items Not Available
                            </p>
                        </div>
                    )
            }
        </>
    );
};

export default AllProduct;