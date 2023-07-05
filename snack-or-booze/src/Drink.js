import React from "react";
import Item from "./Item";

function Drink({ drinks, cantFind }) {
  return <Item items={drinks} cantFind={cantFind} />;
}

export default Drink;