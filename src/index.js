import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Error from './Components/Error';
import Signup from './Components/Signup';

const routing = (
<Router>
  <div>
    <Switch>
    <Route exact path ="/"  component={App}/>
    <Route path="/signup" render = {() => (<Signup />)} />
     {/*<Route component={<Error />} />*/}
    </Switch>
  </div>
</Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
