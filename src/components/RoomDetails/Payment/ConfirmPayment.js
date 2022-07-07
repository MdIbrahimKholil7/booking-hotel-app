import React from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import useData from '../../hooks/useData';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';
const ConfirmPayment = () => {
    const stripePromise=loadStripe(`pk_test_51L112oK2utpV7xigcFIcuFnon2vNEB0eQwcI7J442nztYrIDEJ3jvmsJha3EYcHg59WmS9KraF05Gq47eVdvNgfq00NknqMYsQ`)
    const id = JSON.parse(localStorage.getItem('roomId'))
    const [data] = useData(id)
    console.log(data)
    return (
        <div className='flex justify-center'>
             <div class="card w-96 bg-base-100 shadow-xl mt-12 ">
                <div class="card-body ">
                    <Elements stripe={stripePromise}>
                        <CheckOut 
                        data={data}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPayment;