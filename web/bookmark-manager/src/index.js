import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import CategoriesManager from "./CategoriesManager";
import BookmarksManager from "./BookmarksManager";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/categories" component={CategoriesManager} /> 
        <Route exact path="/categories/:categoryId/bookmarks" component={BookmarksManager} />
        <Redirect exact from="/" to="/signIn" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

