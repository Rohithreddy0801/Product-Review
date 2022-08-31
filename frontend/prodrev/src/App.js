import React from 'react';
import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import Login from './Login';
import SignUp from './SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={[<Header/>,<Homepage/>]}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
