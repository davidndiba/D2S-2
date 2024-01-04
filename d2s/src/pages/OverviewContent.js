import React from 'react';
import SessionImageA from '../assets/session_a.png';
import SessionImageB from '../assets/session_b.png';
import SessionImageC from '../assets/session_c.png';
import SessionImageD from '../assets/session_d.png';
import './style.css';

const OverviewContent = () => {
  return (
    <div className="overview-content-container">
      <h3 className='overview-content-container-1'>Status Summary</h3>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="content-item">
            <p className='content-item-1'>Servers</p>
            <p className='content-item-2'>18</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="content-item">
            <p className='content-item-1'>Sessions</p>
            <p className='content-item-2'>4</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="content-item">
            <p className='content-item-1'>Mapped Servers</p>
            <p className='content-item-2'>12</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="content-item">
            <p className='content-item-1'> Reporting API's</p>
            <p className='content-item-2'>5</p>
          </div>
        </div>
      </div>
      <div className="container border-top mb-4 p-4">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="content-item-1">
            <img src={require('../assets/Group 1741.png')} alt="Pie Chart Icon" />
            <div className="button-container">
              <div className="rectangular-bar green"></div>
              <p>Pending:3</p>
            </div>
            <div className="button-container">
              <div className="rectangular-bar red"></div>
              <p>Completed:8</p>
            </div>
            <div className="button-container">
              <div className="rectangular-bar blue"></div>
              <p>Canceled:12</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="content-item border-left pl-3">
                <p>Session B</p>
                <img src={SessionImageB} alt="Session B" />
                <p>Data Transfer Rate: 385mb</p>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="content-item border-left pl-8">
                <p>Session C</p>
                <img src={SessionImageC} alt="Session C" />
                <p>Data Transfer Rate: 335mb</p>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="content-item border-left pl-3">
                <p>Session D</p>
                <img src={SessionImageD} alt="Session D" />
                <p>Data Transfer Rate: 285mb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
       );
};

export default OverviewContent;
