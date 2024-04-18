import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// import data from "../data/data.json";
const Slider = ({start}) => {
  return (
    <Carousel>
      {/* <Carousel.Item>
        <img
          src={data.banner.start[0]}
          alt="First Slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {start.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            src={item}
            alt="First Slide"
            className="d-block w-100"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
