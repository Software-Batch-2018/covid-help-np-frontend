import React, { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import Tweet from "../assets/images/covid.png";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router";

const Content = () => {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(true);

  const { location } = useParams();
  const URL1 = `http://localhost:5001/${location}`;
  let itemList;
  console.log(location)
  const fetchItems = async () => {
    let item;
    try {
      setItems([]);
      item = await axios.get(URL1);
      setItems(item.data);
      setLoad(false);
    } catch (e) {
    }
  };

  useEffect(() => {
    fetchItems();
  }, [location]);



  if (!load) {
    if (items.length !== 0) {
      itemList = items.map((post) => {
        const {_id, filename} = post
        const {  Location, Info, Type } = post.metadata;
        return (
          <Card className="w-10 mb-4 " key={_id}>
            <Card.Header>
              <div className="header">
                <div className="title">
                  <div className="inside-title">
                  <Card.Title>{Location}</Card.Title>
                  <Button variant="primary">{Type}</Button>
                  </div>
                </div>
                <img className="tweetimg" src={Tweet} alt="text" />
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text>{Info}</Card.Text>
              <img src={"http://localhost:5001/image/"+filename} className="image-src" alt="info"/>            
            </Card.Body>
          </Card>
        );
      });
    }else if(location == undefined ){
        itemList = <Card.Title>Select the City.</Card.Title>;
    }
    else {
      itemList = <Card.Title>No Data Found.</Card.Title>;
    }
  }

  return (
    <>
      <Container>{itemList}</Container>
    </>
  );
};

export default Content;
