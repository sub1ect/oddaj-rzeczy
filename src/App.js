import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './components/pages/Home';
import Local from './components/pages/Local';
import LoggedIn from './components/pages/LoggedIn';
import Organizations from './components/pages/Organizations';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import LoggedOut from './components/pages/LoggedOut';
import Error from './components/pages/Error';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/local'>
          <Local />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/logged_out'>
          <LoggedOut />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/logged_in'>
          <LoggedIn />
        </Route>
        <Route path='/organizations'>
          <Organizations />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
