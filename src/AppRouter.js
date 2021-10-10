import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {AboutScreen} from "./AboutScreen";
import {LoginScreen} from "./LoginScreen";
import {HomeScreen} from "./HomeScreen";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/about" component={ AboutScreen } />
          <Route exact path="/login" component={ LoginScreen } />
          <Route exact path="/" component={ HomeScreen } />
        </Switch>
      </>
    </Router>
  )
}
