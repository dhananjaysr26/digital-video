import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import PageNotFound from "../components/PageNotFound";
import Profile from "../components/Profile";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
export default function AppRouter() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Signin} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}
