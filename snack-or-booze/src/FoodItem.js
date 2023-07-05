import React from "react";
import Item from "./Item";

function FoodItem({ items, cantFind }) {
  return <Item items={items} cantFind={cantFind} />;
}

export default FoodItem;
