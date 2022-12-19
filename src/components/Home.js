import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1 className='text-5xl text-pink-700'>This is home, let see</h1>
            {user?.displayName && <span className='text-3xl text-violet-500 font-bold'>Welcome {user.displayName}</span>}
        </div>
    );
};

export default Home;