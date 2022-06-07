import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home'
import Header from './components/Home/Header';
import Footer from './components/Shared/Footer';

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </Header>
    </div>
  );
}

export default App;
