import React from 'react';
import { BrowseRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login.js'

function App() {
  return (
    <Router>
      <div className='App'>
          <Switch>
            <Route path='/log-in' component={Login}/>
            <Route path='/sign-up'component={Signup}/>
          </Switch>
      </div>
    </Router>
  );
};

export default App;