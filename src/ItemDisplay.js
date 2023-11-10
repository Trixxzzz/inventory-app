import React from 'react';

const ItemDisplay = ({ items, deleteItem }) => {
  const handleDelete = (index) => {
    deleteItem(index);
  };

  return (
    <div>
      <h2>Items in Inventory:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemDisplay;
