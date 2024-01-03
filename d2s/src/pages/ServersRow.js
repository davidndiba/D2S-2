// components/ThreeContainersRow.js
import React from 'react';
import './ThreeContainersRow.css'; 

const   ServersRow = () => {
  return (
    <div className="three-containers-row-container">
      <div className="row-containers">
        <div className="container-item">
          <p>Total Servers</p>
          <p>5</p>
        </div>
        <div className="container-item">
          <p>Mapped Session</p>
          <p>2</p>
        </div>
        <div className="container-item">
          <p>Average Sync Timeline</p>
          <p>1 Month</p>
        </div>
      </div>
    </div>
  );
};

export default ServersRow;
