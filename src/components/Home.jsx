import React from 'react';
import StripeContainer from '../api/stripe/StripeContainer';
import '../style/Home.scss';


const Home = () => {
    return (
        <div className='home'>
            <h1>Stripe</h1>
            <StripeContainer />
        </div>
    );
};

export default Home;