import React, { useState } from "react";

function Item({ name, category }) {
  // State variable to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to handle button click and toggle cart state
  function handleClick() {
    setIsInCart(function(isInCart) {
      return !isInCart;
    });
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;