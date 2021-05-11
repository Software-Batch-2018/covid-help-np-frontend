import React from 'react'
import { Container , Form , FormControl , Button, Jumbotron } from 'react-bootstrap'
import { SearchIcon } from "@heroicons/react/solid";
const Dashboard = () => {
    return (
        <>   
        <Jumbotron className="w-50 p-3">
        <Form inline>   
       <FormControl type="text" placeholder="Search for you city or Select from below" className="mr-4 w-100" />
     {/* <Button variant="outline-info">Search</Button> */}
       </Form>
      </Jumbotron>
        </>
    )
}

export default Dashboard;
