import { React, useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import Tweet from "../assets/images/covid.png";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router";
import SkeletonComponent from "./Skeleton";

const Content = () => {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);

  const { location } = useParams();
  const URL1 = `https://covid-help-np.herokuapp.com/${location}`;
  let itemList;
  console.log(location);
  const fetchItems = async () => {
    let item;
    try {
      setItems([]);
      setLoad(true);
      item = await axios.get(URL1);
      setItems(item.data);
      setLoad(false);
    } catch (e) {}
  };

  useEffect(() => {
    fetchItems();
  }, [location]);

  if (load) {
    itemList = <SkeletonComponent />;
  }

  if (!load) {
    if (items.length !== 0) {
      itemList = items.map((post) => {
        const { _id, filename } = post;
        const { Location, Info, Type } = post.metadata;
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
              <img
                src={"https://covid-help-np.herokuapp.com/image/" + filename}
                className="image-src"
                alt="info"
              />
            </Card.Body>
          </Card>
        );
      });
    } else if (location == undefined) {
      itemList = (
        <div className="message">
          <Card.Title classname="m-4">
            Please select the city to get covid related help.
          </Card.Title>
        </div>
      );
    } else {
      itemList = (
        <div className="message">
          <Card.Title classname="m-auto">
            No data found for this city.
          </Card.Title>
        </div>
      );
    }
  }

  return (
    <>
      <Container>{itemList}</Container>
    </>
  );
};

export default Content;
