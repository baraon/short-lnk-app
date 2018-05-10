import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import Signup from '../imports/ui/Signup';
import Links from '../imports/ui/Link';
import Login from '../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';

const history = createHistory();

const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/links" component={Links}/>
      <Route exact path="*" component={NotFound}/>
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
