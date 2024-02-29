import React, { Fragment } from "react";
import "./card.css";

const Card = ({ heading, about }) => {
  return (
    <Fragment>
      <div className="card">
        <img src="" alt="add Image" />
        <div className="details">
          <h3> Helloooooooo </h3>
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatum, molestiae!
          </p>
          <button>View</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
