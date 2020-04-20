import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import Categories from "./Pages/Categories";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Page404 from "./Pages/Page404";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}
