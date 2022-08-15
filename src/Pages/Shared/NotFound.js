import React from 'react';
import NoFound from '../../image/NotFound.svg';

const NotFound = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <img src={NoFound} className="h-340" alt='Not Found' />
            <p className="text-xl text-headingColor font-semibold my-2">
                Link is Not Available
            </p>
        </div>
    );
};

export default NotFound;