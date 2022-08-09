import React from 'react';

const Loading = () => {
    return (
        <div className=' w-full flex justify-center items-center'>
            <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-yellow-500 ">
                <span className="visually-hidden">O</span>
            </div>
        </div>
    );
};

export default Loading;