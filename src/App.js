import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import routeConfig from './routeConfig'
import './style/app.scss';
import Homepage from './components/homepage/Homepage';
import Roompage from './components/roompage/Roompage';

const App = (props) => {
  return (
    <Router >
      <Switch>
          {
              routeConfig.map((route,index)=>{
                  return(
                      // <Route exact path={route.path} render={(props)=><route.component {...props}/>} />
                      <Route exact path={route.path} component={route.component} />
                  )
              })
          }
        <Redirect from="/roomInfo/" to="/roomInfo/Single_Room" />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
