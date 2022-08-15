import React from 'react';
import { useParams } from 'react-router-dom';

const StockUpdate = () => {
    const name = useParams();
    console.log(name)
    return (
        <div>
            <h1 className='text-2xl text-center mb-60'>Stock Update</h1>
        </div>
    );
};

export default StockUpdate;