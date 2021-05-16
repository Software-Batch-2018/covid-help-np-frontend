import React from "react";
import { Card, Container } from "react-bootstrap";
import Dashboard from "../components/Dashboard";
import About from '../components/About'
import { Route, Switch, withRouter } from "react-router-dom";
import Content from "../components/Content";

const ContentContainer = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
          <Content />
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route path="/:location/:Resource">
          <Dashboard />
          <Content />
        </Route>
        <Route path="/:location">
          <Dashboard />
          <Container>
            <Card.Title className="m-4">Select the Resources.</Card.Title>
          </Container>
        </Route>
        <Route path="*" >404 Not found</Route>
      </Switch>
    </>
  );
};
export default withRouter(ContentContainer);
