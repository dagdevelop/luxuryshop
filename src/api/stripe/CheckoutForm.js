import React from 'react';
import '../../style/CheckoutForm.scss';
import { useStripe } from '@stripe/react-stripe-js';
import Transition from '../../components/Transition';


const CheckoutForm = () => {
    const stripe = useStripe();

    const items = [
        {
            price: "price_1LhBfLFEkOWmk8ZuU7trYumG",
            quantity: 1
        },
        {
            price: "price_1LhCBjFEkOWmk8ZucxtyEe44",
            quantity: 1
        }
    ];

    const checkoutOptions = {
        lineItems: [...items],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    };


    const redirectToCheckout = async (e) => {
        e.preventDefault();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("error stripe : ", error);
    }


    return (
        <Transition>
            <div className='checkoutForm mt-3'>
                <button onClick={redirectToCheckout}>checkout</button>
            </div>
        </Transition>
    );
};

export default CheckoutForm;