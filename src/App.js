import { Route, Routes } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
import './App.css';
import Header from './components/Home/Header';
import Footer from './components/Shared/Footer';
import SearchResult from './components/SearchResult/SearchResult';
import loading from '../src/assets/images/loading-1.gif'
import RoomDetails from './components/RoomDetails/RoomDetails';
import Payment from './components/RoomDetails/Payment/Payment';
import ReviewHouse from './components/RoomDetails/Payment/ReviewHouse';
import WhosComing from './components/RoomDetails/Payment/WhosComing';
import ConfirmPayment from './components/RoomDetails/Payment/ConfirmPayment';
import Login from './components/Shared/Login/Login';
import SignUp from './components/Shared/Login/SignUp';
import RequireAuth from './components/Shared/RequireAuth';
import AllRoom from './components/AllRoom/AllRoom';
import Dashboard from './components/Dashboard/Dashboard';
import MyProfile from './components/Dashboard/MyProfile';
import YourBooking from './components/Dashboard/YourBooking';
import AddReview from './components/Dashboard/AddReview';
import EditProfile from './components/Dashboard/EditProfile';
import GuestDetails from './components/Dashboard/GuestDetails';
import AddRoom from './components/Dashboard/AddRoom';
import AllStatus from './components/Dashboard/AllStatus';
import ReviewCheck from './components/Dashboard/ReviewCheck';
import ManageAllBook from './components/Dashboard/ManageAllBook';
import RequireAdmin from './components/Shared/RequreAdmin';
import RequireUser from './components/Shared/RequireUser';
import Contact from './components/Contact/Contact';

export const RoomInformation = React.createContext('fds')

function App() {
  const [roomInformation, setRoomInformation] = useState({})
  const Home = React.lazy(() => import('../src/components/Home/Home'))
  return (
    <div className="App">
      <RoomInformation.Provider value={roomInformation}>
        <Header>
          <Routes>
            <Route path='/' element={
            <Suspense
              fallback={<div><img className='w-full h-screen' src={loading} alt="loading" /></div>}
            >
              <Home
                setRoomInformation={setRoomInformation}
              />
            </Suspense>} />
            <Route path='/contactUs' element={<Contact/>}/>
            <Route path='allRoom' element={<AllRoom />} />
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
            <Route path='/dashboard' element={<Dashboard />}>
              <Route index element={<MyProfile />} />
              <Route path='yourBooking' element={<YourBooking />} />
              <Route path='addReview' element={<RequireUser>
                <AddReview />
              </RequireUser>} />
              <Route path='editProfile' element={<EditProfile />} />

              <Route path='guestDetails' element={<RequireAdmin>
                <GuestDetails />
              </RequireAdmin>} />
              <Route path='addRoom' element={<RequireAdmin>
                <AddRoom />
              </RequireAdmin>} />
              <Route path='allStatus' element={<RequireAdmin>
                <AllStatus />
              </RequireAdmin>} />
              <Route path='manageBook' element={<RequireAdmin>
                <ManageAllBook />
              </RequireAdmin>} />
              <Route path='reviewCheck' element={<RequireAdmin>
                <ReviewCheck />
              </RequireAdmin>} />
            </Route>
          </Routes>
          <Footer />
        </Header>
      </RoomInformation.Provider>
    </div>
  );
}

export default App;
