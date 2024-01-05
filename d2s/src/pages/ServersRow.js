// components/ThreeContainersRow.js
import React from 'react';
import './ThreeContainersRow.css'; 

const   ServersRow = () => {
  return (
    <div className="three-containers-row-container">
      <div className="row-containers">
        <div className="container-item">
          <p className='container-item-1'>Total Servers</p>
          <p className='container-item-2'>5</p>
        </div>
        <div className="container-item">
          <p className='container-item-1'>Mapped Session</p>
          <p className='container-item-2'>2</p>
        </div>
        <div className="container-item">
          <p className='container-item-1'>Average Sync Timeline</p>
          <p className='container-item-2'>1 Month</p>
        </div>
      </div>
    </div>
  );
};

export default ServersRow;
