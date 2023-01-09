import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title = "", descr = "", cb = "", url = "" }) => {
  return (
    <div className="card" style={{ border: `6px double ${cb}` }}>
      <div className="card-header">
        <Link to={url} className="card-button">
          ➜
        </Link>
      </div>
      <div className="card-title">
        <h3 className="card-title-h3">{title}</h3>
      </div>
      <div className="card-line"></div>
      <div className="card-description">
        <p className="card-text">{descr}</p>
      </div>
    </div>
  );
};

export default Card;
