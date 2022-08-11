import React from 'react';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;