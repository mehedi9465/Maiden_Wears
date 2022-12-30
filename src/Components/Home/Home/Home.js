import React from 'react';
import Brands from '../Brands/Brands';
import NewArrivals from '../NewArrivals/NewArrivals';
import Promo from '../Promo/Promo';

const Home = () => {
    return (
        <div>
            <Promo />
            <NewArrivals />
            <Brands />
        </div>
    );
};

export default Home;