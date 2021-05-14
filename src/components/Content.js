import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ContentContainer from "../containers/ContentContainer";

const Content = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <ContentContainer />
        </Route>
        <Route path="/:location">
          <ContentContainer />
        </Route>
        <Route path="*">404 Not found</Route>
      </Switch>
    </>
  );
};
export default withRouter(Content);
