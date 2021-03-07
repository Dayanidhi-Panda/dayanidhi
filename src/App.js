import logo from './logo.svg';
import './App.css';
import Product from './Component/Customer-module/Product'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
  

import Login from './Component/Customer-module/Login'

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Login />
      <Product /> */}
      <Switch>
        <Route exact path="/login" >
          <Login />
        </Route>
        <Route exact path="/product" >
          <Product />
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
