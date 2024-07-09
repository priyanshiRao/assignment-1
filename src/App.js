// App.js
import React from 'react';
import SelectAsync from './SelectAsync';
import ContainerDetail from './containerDetail';
import SearchButton from './searchButton.js';
import { locations } from './data';
import './App.css';

// Simulated API call to fetch options based on input value
const fetchOptions = (inputValue) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        locations
          .filter((option) =>
            option.display_name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((option) => ({
            value: option.id,
            label: option.display_name,
          }))
      );
    }, 1000);
  });
};

const App = () => {
  const [origin, setOrigin] = React.useState(null);
  const [destination, setDestination] = React.useState(null);
const handleContainerDetailsApply = (details) => {
    console.log('Container details:', details);
    // Handle the container details here
  };
  return (
    <div className="container">
      <SelectAsync
        loadOptions={fetchOptions}
        onChange={setOrigin}
        value={origin}
        label="Origin Point"
      />
      <SelectAsync
        loadOptions={fetchOptions}
        onChange={setDestination}
        value={destination}
        label="Destination Point"
      />
      
      <h1>Container Booking</h1>
      <ContainerDetail onApply={handleContainerDetailsApply} />
    
      
      <SearchButton />
    </div>
  );
};

export default App;
