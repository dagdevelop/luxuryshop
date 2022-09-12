import React from 'react';
import axios from 'axios';
import '../../style/CheckoutForm.scss';
import { CardNumberElement, CardExpiryElement, CardCvcElement, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Row, Col, Spinner } from 'react-bootstrap';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (e) => {
        e.preventDefault();

        
    }

    return (
        <div className='checkoutForm'>
            <form className='form' onSubmit={handleSubmit}>
                <Row>
                    <CardNumberElement className="card-number" onBlur={true} options={{ showIcon: true }} />
                </Row>

                <Row>
                    <Col className='card-extra-data'>
                        <CardExpiryElement onBlur={true} />
                    </Col>
                    <Col className='card-extra-data'>
                        <CardCvcElement onBlur={34} options={{ showIcon: true }} />
                    </Col>

                </Row>


                <Row>
                    <button>Payer</button>
                </Row>

            </form>

        </div>
    );
};

export default CheckoutForm;