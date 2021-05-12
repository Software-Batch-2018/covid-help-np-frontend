import React, { useState } from "react";
import JSONDATA from "./data/places.json";
import { NavLink } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Form,
  FormControl,
  Jumbotron,
} from "react-bootstrap";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Jumbotron className="w-75 p-3">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for you city or search from below"
            className="mr-4 w-100"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </Form>
        <ButtonGroup
          role="group"
          className="mt-4 ml-2 mr-2  flex-wrap"
        ></ButtonGroup>
        <div>
          {JSONDATA.filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val, key) => {
            return (
              <div className="button-container">
                <NavLink to={val.name}>
                  <Button
                    className="mr-2 mb-2"
                    variant="secondary"
                    value={val.name}
                  >
                    {val.name}
                  </Button>
                </NavLink>
              </div>
            );
          })}
        </div>
      </Jumbotron>
    </>
  );
};
export default Dashboard;
