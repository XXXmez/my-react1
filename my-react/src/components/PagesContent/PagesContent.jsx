import React from "react";
import { Link } from "react-router-dom";
import "./PagesContent.css";

const PagesContent = ({ title = "title", component = "" }) => {
  return (
    <div className="content">
      <div className="content-element">
        <Link to={"/"} className="content-link">
          🠔 Come back
        </Link>
      </div>
      <div className="content-element">
        <h2 className="content-title">{title}</h2>
      </div>

      <div className="content-element">{component}</div>
    </div>
  );
};

export default PagesContent;
