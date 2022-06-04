import React from 'react';
import Banner from './Banner';
import Description from './Description';
import Details from './Details';
import Rooms from './Rooms';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Details/>
            <Description/>
            <Rooms/>
        </div>
    );
};

export default Home;