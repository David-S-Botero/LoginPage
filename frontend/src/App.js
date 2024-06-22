import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Login from './Login.js'
import Signup from './Signup.js';

function App() {
  return (
    <Router>
      <div className='App'>
          <Routes>
            <Route path='/login' component={Login}/>
            <Route path='/signup'component={Signup}/>
          </Routes>
      </div>
    </Router>
  );
};

export default App;