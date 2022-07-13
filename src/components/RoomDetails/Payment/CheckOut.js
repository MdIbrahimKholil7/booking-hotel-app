import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../../api/axiosPrivate';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase_init';

const CheckOut = ({ data }) => {
    const result = JSON.parse(localStorage.getItem('time-zone'))
    const stripe = useStripe()
    const [user] = useAuthState(auth)
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [load, setLoad] = useState(false)
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const startDate = format(parseISO(result?.date[0].startDate), 'dd/MM/yy')
    const endDate = format(parseISO(result?.date[0].endDate), 'dd/MM/yy')
    const night = Number(endDate.split('/')[0]) - Number(startDate.split('/')[0]) + 1
    const { price } = data || {}
    const roomDetails = data
    const serviceFee = 21
    const cleaningFee = 10
    useEffect(() => {
        (async () => {
            /* const {data}=await axiosPrivate.post('http://localhost:5000/user/payment',{price})
            console.log(data) */
            const amount = price * night + serviceFee + cleaningFee
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
        setLoad(true)
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
            setSuccess('')
            setCardError(paymentError.message)
            setLoad(false)
        } else {
            setCardError('')

            const details = {
                transactionId: paymentIntent?.id,
                roomBooked: true,
                email: user?.email,
                roomDetails,
                pending:false,
                name:user?.displayName
            }

            fetch(`http://localhost:5000/user/user-roomBooked`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(details)
            }).then(res => res.json())
                .then(data => {
                    setSuccess('Your payment is success')
                    setLoad(false)
                    console.log(data)
                })
            console.log(paymentIntent)
            console.log('payment success')
            // console.log(data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                {cardError && <p className='text-red-500 my-4'>{setCardError}</p>}
                <div className='text-center'>
                    <button className={`btn mt-7 btn-primary mx-auto ${load ? 'loading' : ''}`} type="submit" disabled={!stripe || !clientSecret || !elements}>
                        {load?'processing':'pay'}
                    </button>
                </div>
                {/* <button class="btn loading mt-7  mx-auto">loading</button> */}
                {
                    success && <p className='text-center mt-5 text-green-600'>{success}</p>
                }
                {
                    cardError && <p className='text-center mt-5 text-red-500'>{cardError}</p>
                }
            </form>
        </div>
    );
};

export default CheckOut;