import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
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
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [containerDetails, setContainerDetails] = useState({
    size: '20ft',
    type: 'Standard (Dry)',
    commodity: 'General',
    weight: '18 MT',
    count: 1,
  });

  const [isSummaryVisible, setIsSummaryVisible] = useState(false);

  const handleApply = () => {
    // Set default values if any field is empty
    const updatedContainerDetails = {
      size: containerDetails.size || '20ft',
      type: containerDetails.type || 'Standard (Dry)',
      commodity: containerDetails.commodity || 'General',
      weight: containerDetails.weight || '18 MT',
      count: containerDetails.count || 1,
    };

    setContainerDetails(updatedContainerDetails);
    setIsSummaryVisible(true);
  };

  return (
    <div className="container">
      <div className="field">
        <label>Origin Point *</label>
        <AsyncSelect
          cacheOptions
          loadOptions={fetchOptions}
          defaultOptions
          onChange={setOrigin}
          value={origin}
        />
      </div>
      <div className="field">
        <label>Destination Point *</label>
        <AsyncSelect
          cacheOptions
          loadOptions={fetchOptions}
          defaultOptions
          onChange={setDestination}
          value={destination}
        />
      </div>
      <div className="field-container">
        <label>Container Details *</label>
        {isSummaryVisible ? (
          <div className="container-summary">
            {containerDetails.count} x {containerDetails.size} {containerDetails.type}
          </div>
        ) : (
          <div className="container-details">
            <div className="field">
              <label>Size *</label>
              <div>
                <button onClick={() => setContainerDetails({ ...containerDetails, size: '20ft' })}>20ft</button>
                <button onClick={() => setContainerDetails({ ...containerDetails, size: '40ft' })}>40ft</button>
                <button onClick={() => setContainerDetails({ ...containerDetails, size: '40ft HC' })}>40ft HC</button>
                <button onClick={() => setContainerDetails({ ...containerDetails, size: '45ft HC' })}>45ft HC</button>
              </div>
            </div>
            <div className="field">
              <label>Type *</label>
              <div>
                <button onClick={() => setContainerDetails({ ...containerDetails, type: 'Standard (Dry)' })}>
                  Standard (Dry)
                </button>
                <button onClick={() => setContainerDetails({ ...containerDetails, type: 'Refrigerated (Reefer)' })}>
                  Refrigerated (Reefer)
                </button>
                <button onClick={() => setContainerDetails({ ...containerDetails, type: 'Open Top' })}>Open Top</button>
                <button onClick={() => setContainerDetails({ ...containerDetails, type: 'Flat Rack' })}>Flat Rack</button>
                <button onClick={() => setContainerDetails({ ...containerDetails, type: 'ISO Tank' })}>ISO Tank</button>
                <button onClick={() => setContainerDetails({ ...containerDetails, type: 'Open Side (One Door Open)' })}>
                  Open Side (One Door Open)
                </button>
              </div>
            </div>
            <div className="field">
              <label>Commodity *</label>
              <select
                onChange={(e) => setContainerDetails({ ...containerDetails, commodity: e.target.value })}
                value={containerDetails.commodity}
              >
                <option value="General">General</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="field">
              <label>Total Weight per Ctr. *</label>
              <input
                type="number"
                value={containerDetails.weight.replace(' MT', '')}
                onChange={(e) => setContainerDetails({ ...containerDetails, weight: `${e.target.value} MT` })}
              />{' '}
              MT
            </div>
            <div className="field">
              <label>Count *</label>
              <input
                type="number"
                value={containerDetails.count}
                onChange={(e) => setContainerDetails({ ...containerDetails, count: e.target.value })}
              />
            </div>
            <button className="applyButton" onClick={handleApply}>
              Apply
            </button>
            <button className="addButton">Add Another Container</button>
          </div>
        )}
      </div>
      <div className="field">
        <button className="searchButton">🔍</button>
      </div>
    </div>
  );
};

export default App;
