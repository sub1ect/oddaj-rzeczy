import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './components/pages/Home';
import Local from './components/pages/Local';
import LoggedIn from './components/pages/LoggedIn';
import Organizations from './components/pages/Organizations';
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
