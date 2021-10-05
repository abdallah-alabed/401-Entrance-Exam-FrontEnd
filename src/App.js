import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";
import Fav from "./components/Fav";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import LogoutButton from "./components/LogoutButton";
import LoginButton from "./components/LoginButton";

export class App extends Component {
  render() {
    console.log(this.props.auth0);
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
           
                <Route exact path="/">
                {this.props.auth0.isAuthenticated ? (
                  <><Home /><LogoutButton /></>
              ) : (
                <LoginButton />
              )}
 </Route>
             <Route exact path="/list">
                  <Fav />
                </Route>
            
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default withAuth0(App);
