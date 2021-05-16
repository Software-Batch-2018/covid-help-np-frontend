import {React } from "react";
import JSONDATA from './data/type.json';
import {Button} from "react-bootstrap";
import {NavLink } from "react-router-dom";


const Resources = (props)=>{
    if(props.data)
    {
    return(
            <div className="container-button">
            <h3>Please Select Resources</h3>
            {JSONDATA.map((val, key)=>{
                return (
                <div className="button-container" key={key}>
                <NavLink to={'/' + props.data +'/'+val.type }  >
                    <Button  className="button mr-2 mb-2" variant="secondary" value={val.type}  > {val.type} </Button>
                </NavLink>
                </div>
                )
            })}
        </div>
        )
    }else{
        return(
            <h3>Please select Location</h3>
        )
    }
}

export default Resources