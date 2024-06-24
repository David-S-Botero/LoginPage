import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Greeting from './Greeting';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/login/' element={<Login />} />
          <Route path='/signup/' element={<Signup />} />
          <Route path='/greeting/' element={<Greeting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
