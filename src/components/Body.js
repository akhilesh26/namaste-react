import React, { Children, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const listJs = [
    {
      id: 1,
      name: "KFC",
      rating: 4.5,
      cuisine: ["Chicken", "Noth Indian", "Burger"],
      costForTwo: 500,
    },
    {
      id: 2,
      name: "Domino",
      rating: 3.1,
      cuisine: ["Chicken", "Noth Indian", "Burger"],
      costForTwo: 500,
    },
    {
      id: 4,
      name: "MCD",
      rating: 4.1,
      cuisine: ["Chicken", "Noth Indian", "Burger"],
      costForTwo: 500,
    },
  ];

  const [list, setList] = useState(listJs);

  const filterTopRated = () => {
    let filList = list.filter((item) => item.rating > 4);
    setList(filList);
  };

  return (
    <div className="body">
      <div className="search">
        <button onClick={() => filterTopRated()}>Filter top rated resto</button>
      </div>
      <div className="res-container">
        {list.map((item) => (
          <RestaurantCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
