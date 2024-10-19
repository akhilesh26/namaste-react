import React from "react";
import { CDN_URL } from "../utils/constants";

const RestorantCard = ({ data }) => {
  const { name, cuisine, costForTwo, rating } = data;

  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={CDN_URL} />
      <h3>{name}</h3>
      <h4>{cuisine.join(",")}</h4>
      <h4>{rating} Star</h4>
      <h4>40 min</h4>
    </div>
  );
};

export default RestorantCard;
