import React from "react";

const Product = ({ product }) => {
  const { toyPicture, toyName, price, rating } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={toyPicture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{toyName}</h2>
          <p>{price}</p>
          <p>{rating}</p>
          <div className="card-actions">
            <button type="button" className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
