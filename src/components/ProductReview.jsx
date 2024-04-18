import React from "react";
import "../styles/ProductReview.css";
const ProductReview = ({ name, price, image, index, review }) => {
  return (
    <div className="ProductReview">
      <img src={image} alt={`review-${index}`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};

export default ProductReview;
