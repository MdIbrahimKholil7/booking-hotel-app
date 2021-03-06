import React, { Suspense } from 'react';
import loading from '../../assets/images/loading.gif'
const Review = React.lazy(() => import('./Review'));
const Banner = React.lazy(() => import('./Banner'))
const Rooms = React.lazy(() => import('./Rooms'))
const Details = React.lazy(() => import('./Details'))
const Description = React.lazy(() => import('./Description'))
const Business = React.lazy(() => import('./Business'))

const Home = ({ setRoomInformation }) => {
    return (
        <div className=''>
            <Suspense fallback={<div><img className='w-full h-screen' src={loading} alt="loading" /></div>}>
                <Banner />
                <Details
                    setRoomInformation={setRoomInformation}
                />
                <Description />
                <Rooms />
                <Business />
                <Review />
            </Suspense>
        </div>
    );
};

export default Home;