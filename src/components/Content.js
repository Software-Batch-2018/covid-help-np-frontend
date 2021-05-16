import {React, useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import Tweet from "../assets/images/covid.png";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router";
import SkeletonComponent from './Skeleton'

const Content = () => {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);

  const {location, Resource } = useParams();
  const URL1 = `https://covid-help-np.herokuapp.com/loc/${location}`;
  let itemList;
  const fetchItems = async () => {
    let item;
    try {
      setItems([]);
      setLoad(true);
      item = await axios.get(URL1);
      setItems(item.data);
      setLoad(false);
    } catch (e) {
    }
  };

  useEffect(() => {
    fetchItems();
  }, [Resource]);

  if (load) {
    itemList =<SkeletonComponent/>
  }

  const arr = []

  items.filter(function (entry) {
    if(entry.metadata.Type==Resource){
      arr.push(entry)
    }
  });

  if (!load) {
    if (arr.length !== 0) {
      itemList = arr.map((post) => {
        const {_id, filename} = post
        const {  Location, Info, Type } = post.metadata;
        return (
          <Card className="w-10 mb-4 " key={_id}>
            <Card.Header>
              <div className="header">
                <div className="title">
                  <div className="inside-title">
                  <Card.Title>{Location}</Card.Title>
                  <Button variant="secondary">{Type}</Button>
                  </div>
                </div>
                <img className="tweetimg" src={Tweet} alt="text" />
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text>{Info}</Card.Text>
              <img src={"https://covid-help-np.herokuapp.com/image/"+filename} className="image-src" alt="info"/>
            </Card.Body>
          </Card>
        );
      });
    }else if(location === undefined ){
        itemList = <div><p className="info1">We Dont Own Any of The Content Posted Here. This is a Collection of Posts Found on Social Medias<br></br>&#10071;Please Report us at <a href="mailto:ecovidnpinfo22@gmail.com">covidnpinfo22@gmail.com</a>  if any Frauds Found&#10071;</p> <div className="message"><Card.Title className="m-4">Select the City to get Covid related help.</Card.Title></div></div>;
    }else{
      itemList=<div className="message"><Card.Title className="m-auto">No Data Found For this City.</Card.Title></div>
    }
  }

  return (
    <>
      <Container>{itemList}</Container>
    </>
  );
};

export default Content;
