import React, { useState } from "react";
import JSONDATA from './data/places.json';

import {
  Button,
  ButtonGroup,
  Form,
  FormControl,
  Jumbotron,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const onClickHandler = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <Jumbotron className="w-75 p-3">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for you city or Select from below"
            className="mr-4 w-100"
            onChange={(event)=>{
              setSearchTerm(event.target.value);
            }
          }
          value={location}
          />
        </Form>
        <ButtonGroup role="group" className="mt-4 ml-2 mr-2  flex-wrap">
        </ButtonGroup>
        <div>
                {JSONDATA.filter((val)=>{
                    if(searchTerm === ""){
                        return val
                    }
                    else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((val, key)=>{
                    return (
                      <div className="button-container" key={key}>
                      <Link to={'/' + val.name}>
                         <Button  className="mr-2 mb-2" variant="secondary" value={val.name}  onClick={(e) => onClickHandler(e)}> {val.name} </Button>
                      </Link>
                      </div>
                    )
                })}
            </div>
      </Jumbotron>
    </>
  );
};
export default Dashboard;
