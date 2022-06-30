import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Home/Header';
import Footer from './components/Shared/Footer';
import SearchResult from './components/SearchResult/SearchResult';
import loading from '../src/assets/images/loading.gif'
import RoomDetails from './components/RoomDetails/RoomDetails';
import Payment from './components/RoomDetails/Payment/Payment';
import ReviewHouse from './components/RoomDetails/Payment/ReviewHouse';
import WhosComing from './components/RoomDetails/Payment/WhosComing';
import ConfirmPayment from './components/RoomDetails/Payment/ConfirmPayment';
function App() {
  const Home=React.lazy(()=>import('../src/components/Home/Home'))
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path='/' element={<Suspense
          fallback={<div><img className='w-full h-screen' src={loading} alt="loading" /></div>}
          >
            <Home/>
          </Suspense>}/>

          <Route path='searchResult' element={<SearchResult/>}/>
          <Route path='roomDetails/:id' element={<RoomDetails/>}/>
          <Route path='payment' element={<Payment/>}>
            <Route /* path='reviewHouse' */ index element={<ReviewHouse/>}/>
            <Route path='whosComing' element={<WhosComing/>}/>
            <Route path='confirmPayment' element={<ConfirmPayment/>}/>
          </Route>
        </Routes>
        <Footer/>
      </Header>
    </div>
  );
}

export default App;
