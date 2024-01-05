// components/ThreeContainersRow.js
import React from 'react';
import './ThreeContainersRow.css'; 

const   ExchangeRow = () => {
  return (
    <div className="three-containers-row-container">
      <div className="row-containers">
        <div className="container-item">
          <p className='container-item-1'>Active Sessions</p>
          <p className='content-item-2'>6</p>
          <p className='content-item-3'>increase from last month</p>
        </div>
        <div className="container-item">
          <p className='container-item-1'>Mapped Session</p>
          <p className='content-item-2'>137/258</p>
          <p className='content-item-3'>increase from last month</p>
        </div>
        <div className="container-item">
          <p className='container-item-1'>Failed Jobs</p>
          <p className='content-item-2'>12</p>
          <p className='content-item-3'>increase from last month</p>
        </div>
        <div className="container-item">
          <p className='container-item-1'>Avg Data Transfer Rate</p>
          <p className='content-item-2'>258 Mbps</p>
          <p className='content-item-3'>increase from last month</p>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRow;
