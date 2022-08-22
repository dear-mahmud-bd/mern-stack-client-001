import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyItem = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        <Loading />
    }
    
    const email = user?.email;
    
    const [myItem, setMyItem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/food?email=${email}`)
            .then(res => res.json())
            .then(data => setMyItem(data))
    }, [email])


    return (
        <div>
            <h1 className='text-center mt-24'>My Items {myItem.length}</h1>
        </div>
    );
};

export default MyItem;