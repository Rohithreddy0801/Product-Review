import React from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProductInfo from './components/ProductInfo';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={[<Header/>,<Homepage/>]}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/productinfo' element={[<Header/>,<ProductInfo/>]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
