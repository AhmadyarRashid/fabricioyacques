import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/index';
import AddAccount from './components/AddAccount/index';
import Server from './components/Server/index';
import Logs from './components/Logs/index';
import Setting from './components/Setting/index';
import './App.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/addAccount">
            <AddAccount />
          </Route>
          <Route path="/server">
            <Server />
          </Route>
          <Route path="/logs">
            <Logs />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
