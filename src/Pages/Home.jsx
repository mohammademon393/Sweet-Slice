import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-primary'>Home page</h1>
            <h1 className='text-secondary'>Home page</h1>
        </div>
    );
};

export default Home;