import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Jumbotron,
} from "react-bootstrap";
import { SearchIcon } from "@heroicons/react/solid";
const Dashboard = () => {
  return (
    <>
      <Jumbotron className="w-75 p-3">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for you city or Select from below"
            className="mr-4 w-100"
          />
          <SearchIcon className="h-1 w-1" />
        </Form>
      </Jumbotron>
    </>
  );
};
export default Dashboard;
