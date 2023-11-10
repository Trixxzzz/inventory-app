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

  return (
    <div className="App">
      <h1>Inventory Management System</h1>
      <AddItemForm addItem={addItem} />
      <ItemDisplay items={inventory} />
    </div>
  );
}

export default App;
