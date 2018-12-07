import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom';
import Home from "./home";
import Users from "./users";

  const routing = (
      <Router>
          <div className="parentDiv">
              <button className="btn">
                <NavLink exact activeClassName="active" to="/">
                    Home
                </NavLink>
              </button>
              <button className="btn">
                <NavLink exact activeClassName="active" to="/users">
                    Users
                </NavLink>
              </button>
              <hr />
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/users" component={Users}/>
              </Switch>
          </div>
      </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
