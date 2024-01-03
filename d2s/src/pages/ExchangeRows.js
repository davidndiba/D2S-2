// components/ThreeContainersRow.js
import React from 'react';
import './ThreeContainersRow.css'; 

const   ExchangeRow = () => {
  return (
    <div className="three-containers-row-container">
      <div className="row-containers">
        <div className="container-item">
          <p>Active Sessions</p>
          <p>6</p>
          <p>increase from last month</p>
        </div>
        <div className="container-item">
          <p>Mapped Session</p>
          <p>137/258</p>
          <p>increase from last month</p>
        </div>
        <div className="container-item">
          <p>Failed Jobs</p>
          <p>12</p>
          <p>increase from last month</p>
        </div>
        <div className="container-item">
          <p>Avg Data Transfer Rate</p>
          <p>258 Mbps</p>
          <p>increase from last month</p>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRow;
