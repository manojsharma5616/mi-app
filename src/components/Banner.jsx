import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
const Banner = ({ banner }) => {
  return (
    <div className="banner_slider">
      <Carousel>
        {banner.map((item, index) => (
          <Carousel.Item key={item.image} interval={1000} id="banner">
            <img src={item.image} className="d-block w-100" id="banner_image" alt={`${index} banner`} />
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.source}</p>
              <u>Read More</u>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
