import { Route, Routes } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
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
import Login from './components/Shared/Login/Login';
import SignUp from './components/Shared/Login/SignUp';
import RequireAuth from './components/Shared/RequireAuth';

export const RoomInformation = React.createContext('fds')

function App() {
  const [roomInformation, setRoomInformation] = useState({})
  const Home = React.lazy(() => import('../src/components/Home/Home'))
  console.log(roomInformation)
  return (
    <div className="App">
      <RoomInformation.Provider value={roomInformation}>
        <Header>
          <Routes>
            <Route path='/' element={<Suspense
              fallback={<div><img className='w-full h-screen' src={loading} alt="loading" /></div>}
            >
              <Home
                setRoomInformation={setRoomInformation}
              />
            </Suspense>} />

            <Route path='searchResult' element={<RequireAuth>
              <SearchResult />
            </RequireAuth>} />
            <Route path='roomDetails/:id' element={<RequireAuth><RoomDetails /></RequireAuth>} />
            <Route path='payment' element={<RequireAuth><Payment /></RequireAuth>}>
              <Route index element={<ReviewHouse />} />
              <Route path='whosComing' element={<WhosComing />} />
              <Route path='confirmPayment' element={<ConfirmPayment />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
          </Routes>
          <Footer />
        </Header>
      </RoomInformation.Provider>
    </div>
  );
}

export default App;
