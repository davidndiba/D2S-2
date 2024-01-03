// components/ServersTable.js
import React from 'react';
import './ServersTable.css'; // Import your custom CSS file for styling

const ServersTable = () => {
  return (
    <div className="servers-table-container">
      <table className="table servers-table">
        <thead>
          <tr>
            <th>Server Name</th>
            <th>Server URL</th>
            <th>Last Sync Date</th>
            <th>Sync Status</th>
            <th>Linked Sessions</th>
            <th>View More</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KHIS Server</td>
            <td>http://khis.health.go.ke</td>
            <td>17/07/2023 13:00</td>
            <td>Complete</td>
            <td>
              <div className="linked-sessions">
                <span>Icon 1</span>
                <span>Icon 2</span>
                <span>Icon 3</span>
              </div>
            </td>
            <td>
              <div className="view-more">
                <span>▶</span>
                <p>Click to view more</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>3PM Server</td>
            <td>http://3pm.nascop.org</td>
            <td>12/07/2023 12:20</td>
            <td>Complete</td>
            <td>
              <div className="linked-sessions">
                <span>Icon 1</span>
                <span>Icon 2</span>
                <span>Icon 3</span>
              </div>
            </td>
            <td>
              <div className="view-more">
                <span>▶</span>
                <p>Click to view more</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>DATIM Server</td>
            <td>http://datim.org</td>
            <td>01/07/2023 04:25</td>
            <td>Pending</td>
            <td>
              <div className="linked-sessions">
                <span>Icon 1</span>
                <span>Icon 2</span>
                <span>Icon 3</span>
              </div>
            </td>
            <td>
              <div className="view-more">
                <span>▶</span>
                <p>Click to view more</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>DHIS2 Server 1</td>
            <td>http://dhisserver2.com</td>
            <td>17/07/2023 13:00</td>
            <td>Failed</td>
            <td>
              <div className="linked-sessions">
                <span>Icon 1</span>
                <span>Icon 2</span>
                <span>Icon 3</span>
              </div>
            </td>
            <td>
              <div className="view-more">
                <span>▶</span>
                <p>Click to view more</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>DHIS2 Server 3</td>
            <td>http://dhisserver3.org</td>
            <td>17/07/2023 13:00</td>
            <td>Failed</td>
            <td>
              <div className="linked-sessions">
                <span>Icon 1</span>
                <span>Icon 2</span>
                <span>Icon 3</span>
              </div>
            </td>
            <td>
              <div className="view-more">
                <span>▶</span>
                <p>Click to view more</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="pagination-container">
        <div className="pagination">
        <span>First</span>
          <span>«</span>
          <span>1</span>
          <span>»</span>
          <span>«</span>
          <span>2</span>
          <span>»</span>
          <span>«</span>
          <span>3</span>
          <span>»</span>
          <span>«</span>
          <span>4</span>
          <span>»</span>
          <span>«</span>
          <span>5</span>
          <span>»</span>
          <span>6</span>
          <span>»</span>
          <span>Last</span>
        </div>
      </div>
    </div>
  );
};

export default ServersTable;
