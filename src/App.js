import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Component/Customer-module/Product'
import Registration from './Component/Customer-module/Registration'
import {withRouter,BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
 

import Login from './Component/Customer-module/Login'

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Login />
      <Product /> */}
      <Switch>
        <Route  exact path="/" component={Login} />
        <Route  path="/login" component={Login} />
        <Route  path="/regstrn" component={Registration} />
        <Route path="/product" component={Product} />
          
      </Switch>

    </div>
    </Router>
  );
}

export default App;
