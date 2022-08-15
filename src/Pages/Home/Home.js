import React from 'react';
import Banner from './Banner';
import MenuContainer from './MenuContainer';
import Products from './Products';

const Home = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <Banner></Banner>
            <Products></Products>
            <MenuContainer></MenuContainer>
        </div>
    );
};

export default Home;