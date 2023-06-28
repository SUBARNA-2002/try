import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Row, Text } from "@nextui-org/react";

import "./Body.css";
const Body = () => {
  const list = [
    {
      title: "Dinning Room",
      img: "https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2fsignature_design_by_ashley%2fcolor%2fgrindleburg_d754%20dining%20room%20group%209-b1.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20",
    },
    {
      title: "Living Room",
      img: "https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/b/p/a1e18853-5f6b-4575-b42b-6c376b416583/assets/6ebe90025ada40719f69a901c3e1a2e0.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20",
    },
    {
      title: "Office",
      img: "https://www.royalfurniture.com/current/img/category/office.jpg",
    },
    {
      title: "Bedroom",
      img: "https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2fglobal_furniture%2fcolor%2favon-1_avonblk-qn-5pc-brwqkojfvnky6vjk-8jfybq.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20",
    },
    {
      title: "Kids Bedroom",
      img: "https://www.homelane.com/blog/wp-content/uploads/2022/04/shutterstock_215654782.jpg ",
    },
    {
      title: "Outdoor",
      img: "https://assets.roomstogo.com/product/summerset-way-brown-5-pc-rectangle-outdoor-dining-set_7506612P_image-3-2?cache-id=5be4e29cedb76a5fad8da373b385b6e2&h=385 ",
    },
    {
      title: "Entertainment",
      img: "https://d9dvmj2a7k2dc.cloudfront.net/catalog/product/cache/1/image/731x481/17f82f742ffe127f42dca9de82fb58b1/c/a/cap_176-3_tv_room_pah20201_1.jpg ",
    },
    {
      title: "Wall Art",
      img: "https://www.cyruscrafts.com/img/cms/blog/hang-wall-art-without-nails/best-way-to-hang-pictures-without-nails.jpg",
    },
  ];

  return (
    <div className="container">
      <div className="row my-2 ">
        <div className="col-lg-6 home-text my-5 text-start">
          <h1
            style={{
              marginLeft: "1.3rem",
              marginTop: "6rem",
              fontSize: "4rem",
            }}
          >
            <span>Modern Funiture</span> <br />
            For Your House
          </h1>
          <h6 style={{ marginLeft: "1.5rem" }} className="text-w">
            We understand your need for home decor
            <br />
            with unique decorative accesssories
          </h6>
          <Link to="/Products" className="btn btn-dark btn-lg mx-4 my-3">
            Shop More
          </Link>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid logo my-5"
            src="https://hometown.gumlet.io/media/product/08/2073/48465/1.jpg?mode=fill&h=360&w=360&dpr=1.5"
            alt=""
          />
        </div>
      </div>
      <hr />
      <h2 className="">
        <span>
          <b>| </b>
        </span>
        Limited Offer
      </h2>
      <div>
        <div className="row">
          <div className="col-lg-4">
            <img
              src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstarted-livingroom.png"
              style={{ width: "100%", height: "90%", borderRadius: "10px" }}
              alt=""
            />
            <h4>
              <b>Living room furniture</b>
            </h4>
            <h5 className="text-w">Upto 50% Off</h5>
            <Link to="/Products" className="btn btn-dark">
              Shop Now
            </Link>
          </div>
          <div className="col-lg-4">
            <img
              src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstarted-bedroom.png"
              style={{ width: "100%", height: "90%", borderRadius: "10px" }}
              alt=""
            />
            <h4>
              <b>Bedroom furniture</b>
            </h4>
            <h5 className="text-w">Upto 50% Off</h5>
            <Link to="/Products" className="btn btn-dark">
              Shop Now
            </Link>
          </div>
          <div className="col-lg-4">
            <img
              src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstarted-diningroom.png"
              style={{ width: "100%", height: "90%", borderRadius: "10px" }}
              alt=""
            />
            <h4>
              <b>Dining room furniture</b>
            </h4>
            <h5 className="text-w">Upto 50% Off</h5>
            <button className="btn btn-dark">Shop Now</button>
          </div>
        </div>
      </div>
      {/* banner */}
      <div style={{ marginTop: "7rem" }}>
        <h2 className="text-center text-w">
          {" "}
          <b>SHOP FURNITURE AT URBAN INTERIORS</b>
        </h2>
        <img
          className="img-fluid my-2"
          src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstartedhero.png"
          alt="error"
        />
      </div>
      <hr />
      <h2>
        <b>| </b>Start Browsing
      </h2>
      <Grid.Container gap={1.5} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.img}
                  objectFit="cover"
                  width={259}
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="center" align="center">
                  <Text b>{item.title}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default Body;
