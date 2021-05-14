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
      <Jumbotron className="p-3">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for you city or Select from below"
            onChange={(event)=>{
              setSearchTerm(event.target.value);
            }
          }
        />
        </Form>
        <div className="container-button">
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
                         <Button  className="button mr-2 mb-2 " variant="secondary" value={val.name}  onClick={(e) => onClickHandler(e)}> {val.name} </Button>
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
