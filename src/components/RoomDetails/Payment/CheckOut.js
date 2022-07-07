import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../../api/axiosPrivate';


const CheckOut = ({ data }) => {
    const result = JSON.parse(localStorage.getItem('time-zone'))
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const startDate = format(parseISO(result?.date[0].startDate), 'dd/MM/yy')
    const endDate = format(parseISO(result?.date[0].endDate), 'dd/MM/yy')
    const night = Number(endDate.split('/')[0]) - Number(startDate.split('/')[0]) + 1
    const { price } = data || {}

    useEffect(() => {
        (async () => {
            /* const {data}=await axiosPrivate.post('http://localhost:5000/user/payment',{price})
            console.log(data) */
            const amount = price * night
            fetch('http://localhost:5000/user/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('hotelAccessToken')}`
                },
                body: JSON.stringify({ amount, data })
            }).then(res => res.json())
                .then(data => setClientSecret(data.clientSecret))

        })()
    }, [price, data, night])
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) return
        const card = elements.getElement(CardElement)
        if (!card) return

        // use card with other method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        error ? setCardError(error.message) : setCardError('')
        // confirmm card payment 
        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,

                },
            },
        );
        console.log(paymentError)
        if (paymentError) {
            setCardError(paymentError.message)
        } else {
            console.log(paymentIntent)
            console.log('payment success')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-primary mt-7 block mx-auto' type="submit" disabled={!stripe || !clientSecret || !elements}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckOut;