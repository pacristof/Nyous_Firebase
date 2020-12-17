import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './utils/firebaseConfig'

import Home from './pages/home'
import Login from './pages/login';
import Register from './pages/register';
import EventosPage from './pages/eventos';

const routing = (
  <Router>
    <Switch>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/eventos" component={EventosPage} />
      </FirebaseAppProvider>
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
