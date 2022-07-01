import React, { Suspense } from 'react';
import loading from '../../assets/images/loading.gif'
const Banner = React.lazy(() => import('./Banner'))
const Rooms = React.lazy(() => import('./Rooms'))
const Details = React.lazy(() => import('./Details'))
const Description = React.lazy(() => import('./Description'))

const Home = ({setRoomInformation}) => {
    return (
        <div>
            <Suspense fallback={<div><img className='w-full h-screen' src={loading} alt="loading" /></div>}>
                <Banner />
                <Details 
                setRoomInformation={setRoomInformation}
                />
                <Description />
                <Rooms />
            </Suspense>
        </div>
    );
};

export default Home;