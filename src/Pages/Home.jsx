import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import SpecialEvents from '../Components/SpecialEvents';
import FeaturedProducts from '../Components/FeaturedProducts';
import BestSales from '../Components/BestSales';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialEvents></SpecialEvents>
            <FeaturedProducts></FeaturedProducts>
            <BestSales></BestSales>
        </div>
    );
};

export default Home;