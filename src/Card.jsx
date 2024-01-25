// Card.jsx
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, imgsrc }) => {
  return (
    <div className="col mb-4">
      <div className="card">
        <img src={imgsrc} className="card-img-top" alt={imgsrc} style={{ height: "200px" }} />
        {/* Adjust the height value as needed */}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <Link to="#" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
