import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import SpecialEvents from '../Components/SpecialEvents';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialEvents></SpecialEvents>
        </div>
    );
};

export default Home;