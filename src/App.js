import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from "./Login";
import Home from "./Home";
import Form4 from "./Form4";
import AddProduct from "./AddProduct";
import Navbar from "./Navbar";
import ShopList from "./components/ShopList";
import Registration1 from "./Registration1";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/AddProduct" exact component={AddProduct} />
          <Route path="/Form4" exact component={Form4} />
          <Route exact path="/" component={ShopList} />
          <Route path="/Registration1" exact component={Registration1} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}
export default App;
