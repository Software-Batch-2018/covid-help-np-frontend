import React, { useState, useEffect } from "react";
import { Spinner, Card, Button, Container } from "react-bootstrap";
import Tweet from "../assets/images/tweet.png";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router";

const Content = ({ service }) => {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(true);

  const { location, services } = useParams();
  const URL1 = `https://fakestoreapi.com/products/${location}`;
  const URL2 = `https://fakestoreapi.com/products/${location}/${services}`;
  const fetchItems = async () => {
    let item;
    try {
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
  }, [location, services]);

  let itemList;
  if ((location && services) == null && items.length == 0) {
    itemList = <Card.Title>Please select the location and services</Card.Title>;
  }

  if (location != null && services == null && items.length == 0) {
    itemList = <Spinner animation="grow" />;
    if (load) {
      itemList = <Card.Title>No Data Found.</Card.Title>;
    }
  }
  if ((location && services) != null && items.length == 0) {
    itemList = <Card.Title>No data found</Card.Title>;
  }

  if (!load) {
    if (!load && items.length != 0) {
      itemList = items.map((post) => {
        const { id, title, price, image, description } = post;
        return (
          <Card className="w-10 mb-4 ml-4" key={id}>
            <Card.Header>
              <div className="header">
                <div className="title">
                  <img src={image} />
                  <div className="inside-title">
                    <h3>Saroj Aryal</h3>
                    <p>@joerush18</p>
                  </div>
                </div>
                <img className="tweetimg" src={Tweet} />
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              {/* this is call now */}
              <Button variant="primary">{price}</Button>
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
