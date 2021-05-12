import React, { useState, useEffect } from "react";
import { Spinner, Card, Button, Container } from "react-bootstrap";
import Tweet from "../assets/images/tweet.png";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router";

const Content = ({ service }, props) => {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(true);
  
  const { location, services } = useParams();
  console.log(props)
  const URL1 = `http://localhost:5001/${location}`;
  const URL2 = `https://fakestoreapi.com/products/${location}/${services}`;
  const fetchItems = async () => {
    let item;
    try {
      setItems([]);
      if (service) {
        item = await axios.get(URL2);
      } else {
        item = await axios.get(URL1);
        console.log(item.data);
      }
      setItems(item.data);
      setLoad(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchItems();
    console.log(items);
  }, [location]);

  let itemList;
  if ((location && services) == null && load) {
    itemList = <Card.Title>Please select the location and services</Card.Title>;
  }

  if (location != null && services == null && load) {
    itemList = <Spinner animation="border" role="status" />;
  }

  if ((location && services) != null && items.length == 0) {
    itemList = <Card.Title>No data found</Card.Title>;
  }

  if (!load) {
    if (items.length != 0) {
      itemList = items.map((post) => {
        const {filename} = post
        const { id, Location, Info, Type } = post.metadata;
        return (
          <Card className="w-10 mb-4 ml-4" key={id}>
            <Card.Header>
              <div className="header">
                <div className="title">
                  <div className="inside-title">
                  <Card.Title>{Location}</Card.Title>
                  <Button variant="primary">{Type}</Button>
                  </div>
                </div>
                <img className="tweetimg" src={Tweet} />
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text>{Info}</Card.Text>
              <img src={"http://localhost:5001/image/"+filename} className="image-src"/>            
            </Card.Body>
          </Card>
        );
      });
    } else {
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
