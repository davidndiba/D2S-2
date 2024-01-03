// components/AdditionalContent.js
import React from 'react';
import './AdditionalContent.css'; // Import your custom CSS file for styling

const AdditionalContent = () => {
  return (
    <div className="additional-content-container">
      <h3>Performance</h3>
      <div className="row">
        {/* Three equal-sized containers */}
        <div className="col-md-4 mb-4">
          <div className="additional-item">
          <p>Active Servers</p>
            <p>6</p>
            <p>KHIS - 257 Mbps</p>
            <p>DATIM - 256 Mbps</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="additional-item">
            <p></p>
            <p>Data Mapping</p>
            <p>3,500</p>
            <p>KHIS / DHIS - 256</p>
            <p>DATIM / 3PM - 158</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="additional-item">
            <p>Data Migrated</p>
            <p>1.4 Gb</p>
            <p>KHIS Server - 847 Mb</p>
            <p>DATIM Server - 746 Mb</p>
          </div>
        </div>
      </div>
      {/* Table with four sections */}
      <table className="table additional-table">
        <thead>
          <tr>
            <th>Service Sessions</th>
            <th>Level</th>
            <th>Periods</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KHIS / DATIM</td>
            <td>Nairobi County Facilities</td>
            <td>
              <div className="period-content">
                <p>Monthly</p>
                <img src="path-to-your-image/image1.png" alt="Image 1" />
                <p>17/34</p>
              </div>
            </td>
            <td>
              <div className="action-content">
                <button className="btn btn-primary">View More</button>
                <span>▶</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>KHIS / DATIM</td>
            <td>All Counties</td>
            <td>
              <div className="period-content">
                <p>Daily</p>
                <img src="path-to-your-image/image1.png" alt="Image 1" />
                <p>123/220</p>
              </div>
            </td>
            <td>
              <div className="action-content">
                <button className="btn btn-primary">View More</button>
                <span>▶</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>DHIS2 Server 2 / DHIS2 Server 3</td>
            <td>Sub-county Level</td>
            <td>
              <div className="period-content">
                <p>Monthly</p>
                <img src="path-to-your-image/image1.png" alt="Image 1" />
                <p>7/10</p>
              </div>
            </td>
            <td>
              <div className="action-content">
                <button className="btn btn-primary">View More</button>
                <span>▶</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>DHIS2 Server 1 / DHIS Server 3</td>
            <td>National Level</td>
            <td>
              <div className="period-content">
                <p>Annually</p>
                <img src="path-to-your-image/image1.png" alt="Image 1" />
                <p>3/4</p>
              </div>
            </td>
            <td>
              <div className="action-content">
                <button className="btn btn-primary">View More</button>
                <span>▶</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>DHIS2 Server 4 / DHIS2 Server 5</td>
            <td>CDC Program Facilities</td>
            <td>
              <div className="period-content">
                <p>Weekly</p>
                <img src="path-to-your-image/image1.png" alt="Image 1" />
                <p>12/12</p>
              </div>
            </td>
            <td>
              <div className="action-content">
                <button className="btn btn-primary">View More</button>
                <span>▶</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdditionalContent;
