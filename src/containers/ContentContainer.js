import React from "react";
import { Route, Switch } from "react-router-dom";
import Content from "../components/Content";

const ContentContainer = () => {
  return (
    <>
      <Switch>
        <Route exact path="/:location">
          <Content />
        </Route>
        <Route path="/:location/:services">
          <Content service="true" />
        </Route>
      </Switch>
    </>
  );
};

export default ContentContainer;
