
import React from 'react';
import SessionImageA from '../assets/session_a.png';
import SessionImageB from '../assets/session_b.png';
import SessionImageC from '../assets/session_c.png';
import SessionImageD from '../assets/session_d.png';

const OverviewContent = () => {
  return (
    <div className="overview-content-container">
      <h3>Status Summary</h3>
      <div className="row">
        {/* Four containers with words and numbers */}
        <div className="col-md-3 mb-4">
          <div className="content-item">
            <p>Servers</p>
            <p>18</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="content-item">
            <p>Sessions</p>
            <p>4</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="content-item">
            <p>Mapped Servers</p>
            <p>12</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="content-item">
            <p>Reporting API's</p>
            <p>5</p>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Two containers with pie chart icon and an empty container */}
        <div className="col-md-4 mb-4">
          <div className="content-item">
            <p>Data Exchange Outcomes</p>
            <img src={require('../assets/Group 1741.png')} alt="Pie Chart Icon" />
          </div>
        </div>
        <div className="col-md-8 mb-4">
          <div className="content-item">
            <p>Data Exchange Sessions</p>
            <div className="session-list">
              <div className="session-item">
              <p>Session A</p>
                <img src={SessionImageA} alt="Session A" />
                <p>435mb</p>
              </div>
              <div className="session-item">
              <p>Session B</p>
                <img src={SessionImageB} alt="Session B" />
                <p>385mb</p>
              </div>
              <div className="session-item">
              <p>Session C</p>
                <img src={SessionImageC} alt="Session C" />
                <p>335mb</p>
              </div>
              <div className="session-item">
              <p>Session D</p>
                <img src={SessionImageD} alt="Session D" />
                <p>285mb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
