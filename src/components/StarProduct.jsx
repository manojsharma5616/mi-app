import React from "react";
import "../styles/StarProduct.css";
const StarProduct = ({ starProduct }) => {
  return (
    <div className="starProduct">
      <div>
        <a href={starProduct[0].url}>
          <img src={starProduct[0].image} alt="image-0" />
        </a>
      </div>
      <div>
        <div>
          <a href={starProduct[1].url}>
            <img src={starProduct[1].image} alt="image-1" />
          </a>
          <a href={starProduct[2].url}>
            <img src={starProduct[2].image} alt="image-2" />
          </a>
        </div>
        <a href={starProduct[3].url}>
          <img src={starProduct[3].image} alt="image-3" />
        </a>
      </div>
    </div>
  );
};

export default StarProduct;
