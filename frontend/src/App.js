import React from 'react';
import { BrowseRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login.js'
import { Signup } from "./Signup.js";

function App() {
  return (
    <Router>
      <div className='App'>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/signup'component={Signup}/>
          </Switch>
      </div>
    </Router>
  );
};

export default App;