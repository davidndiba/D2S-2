// components/MappingContainer.js
import React from 'react';
import './MappingContainer.css';

const MappingContainer = () => {
  return (
    <div className="mapping-container">
      <div className="button-like-container-row">
        <div className="button-like-container">
          <p>National</p>
          <div className="dropdown-arrow">&#9662;</div>
        </div>
        <div className="button-like-container">
          <p>Monthly</p>
          <div className="dropdown-arrow">&#9662;</div>
        </div>
      </div>
      <div className="scrollable-container">
        <div className="half-container">
          <h5>Source</h5>
        </div>
        <div className="half-container">
          <h5>Destination</h5>
        </div>
      </div>
      <div className="search-bar-container">
        <input type="text" placeholder="Search Source" />
        <input type="text" placeholder="Search Destination" />
      </div>
      <button className="btn btn-success">Map</button>
    </div>
  );
};

export default MappingContainer;
