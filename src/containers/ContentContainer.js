import React from "react";
import { Route, Switch } from "react-router-dom";
import Content from "../components/Content";

const ContentContainer = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        <Route exact path="/:location">
          <Content />
        </Route>
        <Route exact path="/:location/:services">
          <Content service={true} />
        </Route>
        <Route>404 Not found</Route>
      </Switch>
    </>
  );
};
export default ContentContainer;
