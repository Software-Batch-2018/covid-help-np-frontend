import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Badge } from "react-bootstrap";

const Coviddata = () => {
  const [CovidData, setcovidData] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchData = async () => {
    let data;
    setcovidData({});
    setLoad(true);
    try {
      data = await axios.get(
        "https://covid19.mohp.gov.np/covid/api/confirmedcases"
      );
      setLoad(false);
      setcovidData(data.data);
    } catch (e) {
      console.log("e.message");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let datas;
  let types = [];
  if (!load) {
    if (CovidData.length != 0) {
      try {
        for (let glob in CovidData) {
          types.push(glob);
          console.log(types);
          datas = types.map((type) => {
            return (
              <div className="data-display ">
                <Badge variant="info mr-3 p-2">{type.toUpperCase()}</Badge>
                <Button variant="btn btn-secondary p-1 ml-3 mr-3 mb-2">
                  Positives{" "}
                  <Badge variant="light">{CovidData[type].positive}</Badge>
                  <span className="sr-only">unread messages</span>
                </Button>
                <Button variant="btn btn-danger p-1 mb-2 ">
                  Deaths <Badge variant="light">{CovidData[type].deaths}</Badge>
                  <span className="sr-only">unread messages</span>
                </Button>
              </div>
            );
          });
        }
      } catch (e) {
        console.log("Error Bitch");
      }
    }
  }

  return <>{datas}</>;
};

export default Coviddata;
