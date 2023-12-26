import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = ({ title, lead, buttonText, buttonLink }) => {
  return (
    <div className="jumbotron mt-5">
      <div className="container">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{lead}</p>
        <hr className="my-4" />
        <p>
          {buttonLink && (
            <Link
              to={buttonLink}
              className="btn btn-primary btn-lg"
              role="button"
            >
              {buttonText}
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
