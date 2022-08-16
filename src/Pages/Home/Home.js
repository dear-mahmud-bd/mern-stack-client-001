import React from 'react';
import Banner from './Banner';
import MenuContainer from './MenuContainer';
import Products from './Products';
import UserFeedback from './UserFeedback';

const Home = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <Banner></Banner>
            <Products></Products>
            <MenuContainer></MenuContainer>
            <UserFeedback></UserFeedback>
        </div>
    );
};

export default Home;