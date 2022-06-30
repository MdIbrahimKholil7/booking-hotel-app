import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Home/Header';
import Footer from './components/Shared/Footer';
import SearchResult from './components/SearchResult/SearchResult';
import loading from '../src/assets/images/loading.gif'
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
        </Routes>
        <Footer/>
      </Header>
    </div>
  );
}

export default App;
