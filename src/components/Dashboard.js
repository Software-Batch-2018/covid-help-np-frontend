import {React, useState } from "react";
import JSONDATA from './data/places.json';
import Resources from './Resources'
import {
  Button,
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
        <div className="location">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
          <p>Choose Your City</p>
        </div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for you city or Select from below"
            defaultValue={location}
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
                      <Link to={'/' + val.name+'/'}  >
                         <Button  className="button mr-2 mb-2" variant="secondary" value={val.name}  onClick={(e) => onClickHandler(e)}> {val.name} </Button>
                      </Link>
                    </div>
                    )
                })}
            </div>
            <Resources data = {location}/>
      </Jumbotron>
    </>
  );
};
export default Dashboard;
