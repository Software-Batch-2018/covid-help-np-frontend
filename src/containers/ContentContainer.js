import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Content from "../components/Content";

const ContentContainer = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        <Route path="/:location">
          <Content />
        </Route>
        <Route path="*" >404 Not found</Route>
      </Switch>
    </>
  );
};
export default withRouter(ContentContainer);
