import React, { useState } from 'react';
import './App.css';
import ItemDisplay from './ItemDisplay';
import AddItemForm from './AddItemForm';

function App() {
  const [inventory, setInventory] = useState([]);

  const addItem = (item) => {
    if (item.quantity > 0) {
      setInventory([...inventory, item]);
    }
  };

  const deleteItem = (index) => {
    const updatedInventory = inventory.filter((_, i) => i !== index);
    setInventory(updatedInventory);
  };

  return (
    <div className="App">
      <h1>Inventory Management System</h1>
      <AddItemForm addItem={addItem} />
      <ItemDisplay items={inventory} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
