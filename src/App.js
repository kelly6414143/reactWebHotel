import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import routeConfig from './routeConfig'
import './style/app.scss';
import Homepage from './components/homepage/Homepage';
import Roompage from './components/roompage/Roompage';

const App = (props) => {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/roomInfo/:type" component={Roompage} />
        <Redirect from="/roomInfo/" to="/roomInfo/singleroom" />
      </Switch>
    </Router>
  );
}

export default App;
