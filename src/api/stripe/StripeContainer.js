import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripeTestPromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY_TEST);

const StripeContainer = () => {
    
    return (
        <div>
            <Elements stripe={stripeTestPromise} >
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default StripeContainer;