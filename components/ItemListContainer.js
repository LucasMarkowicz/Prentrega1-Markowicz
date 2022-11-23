import React from "react";

export default function ProductItem({ product }) {
  return (
    <div className="col">
      <div className="card">
        <img src={product.image} alt="" className="imagen-card" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">USD ${product.price}</p>
            <a>
              {" "}
              <button className="btn btn-primary">Add product</button>
            </a>
        </div>
      </div>
    </div>
  );
}
