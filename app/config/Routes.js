import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory} from 'react-router';

import  Main from "../components/Main";
import  Login from "../components/children/Login";
//import  Logout from "../components/children/Logout";
import  Register  from "../components/children/Register";

// Export the Routes
module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={ Main }>

      {/* If user selects Info or Chat show the appropriate component */}
      <Route path="login" component= { Login } />
      <Route path="register" component={ Register } />

      {/* If user selects any other path... we get the Info Route */}
      {/* <IndexRoute component={ Main } />
         */}
    </Route>
  </Router>
);



