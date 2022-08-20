import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StockUpdate = () => {
    const foodId = useParams();

    const [food, setFood] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/food/${foodId.id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])

    return (
        <div>
            <h1 className='text-2xl text-center my-40'>Stock Update : {food.name}</h1>
        </div>
    );
};

export default StockUpdate;