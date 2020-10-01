import React from 'react';
import {Route, Switch, Link,BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Page/home.js'
import News from './Page/News.js';
import Login from './Page/Login.js';
import Signup  from './Page/Signup.js';
import Check from './check.js'
import MentalHealth from './Page/MentalHealth.js'
import SafetyAdvice from './Page/safetyAdvice.js'
import Map from './Page/map.js'
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";


// should use browser router not router
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";

const history = createBrowserHistory();

document.head.appendChild(styleLink);
ReactDOM.render(
  <Router history={history}>
   
    <Switch>
      <Route exact path='/' render= {(props) => {return <Signup/>}}
      />
      <Route excat path='/login' render = {(props) => {return <Login/>}}
      />

     <Route exact path='/news' render= {(props) => {return <News/>}}
      />
      <Route exact path='/check' render= {(props) => {return <Check/>}}
      />
      <Route exact path='/home' render= {(props) => {return <Home/>}}
      />
      <Route exact path='/map' render= {(props) => {return <Map/>}}
      />
      <Route exact path='/mentalhealth' render= {(props) => {return <MentalHealth/>}}
      />
      <Route exact path='/SafetyAdvice' render= {(props) => {return <SafetyAdvice/>}}
      />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
