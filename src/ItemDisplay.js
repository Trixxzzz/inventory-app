import React from 'react';

const ItemDisplay = ({ items }) => {
  return (
    <div>
      <h2>Items in Inventory:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemDisplay;
