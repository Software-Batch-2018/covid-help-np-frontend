import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Form,
  FormControl,
  Jumbotron,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  const [location, setLocation] = useState("");
  const cities = {
    citylist: [
      "category",
      "Bhaktapur",
      "Lalitpur",
      "Pokhara",
      "Butwal",
      "Tanahun",
      "Syangja",
      "Dang",
      "Dhangadi",
      "Palpa",
    ],
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
    console.log(location);
  };

  const services = {
    servicelist: ["icu", "jewelery"],
  };

  const cityButtonList = cities.citylist.map((city) => {
    return (
      <NavLink to={city}>
        <Button
          className="mr-2 mb-2"
          variant="secondary"
          value={city}
          onClick={(e) => onClickHandler(e)}
        >
          {city}
        </Button>
      </NavLink>
    );
  });

  const serviceButtonList = services.servicelist.map((service) => {
    return (
      <NavLink to={`${location}/${service}`}>
        <Button className="mr-2 mb-2" variant="secondary">
          {service}
        </Button>
      </NavLink>
    );
  });
  return (
    <>
      <Jumbotron className="w-75 p-3">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for you city or Select from below"
            className="mr-4 w-100"
          />
        </Form>
        <ButtonGroup role="group" className="mt-4 ml-2 mr-2  flex-wrap">
          {cityButtonList}
        </ButtonGroup>
        <ButtonGroup role="group" className="mt-4 ml-2 mr-2  flex-wrap">
          {serviceButtonList}
        </ButtonGroup>
      </Jumbotron>
    </>
  );
};
export default Dashboard;
