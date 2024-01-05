// components/ServersTable.js
import React from 'react';
import './ServersTable.css'; // Import your custom CSS file for styling

const ServersTable = () => {
  return (
    <div className="servers-table-container">
      <table className="table servers-table">
        <thead>
          <tr>
            <th className='table-servers-table-1'>Server Name</th>
            <th className='table-servers-table-1'>Server URL</th>
            <th className='table-servers-table-1'>Last Sync Date</th>
            <th className='table-servers-table-1'>Sync Status</th>
            <th className='table-servers-table-1'>Linked Sessions</th>
            <th className='table-servers-table-1'>View More</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='table-server-table-2'>KHIS Server</td>
            <td className='table-server-table-3'>http://khis.health.go.ke</td>
            <td className='table-server-table-4'>17/07/2023 13:00</td>
            <td className='table-server-table-5'>Complete</td>
            <td>
              <div className="linked-sessions">
              <span className="material-symbols-outlined-1">&#xe8b6;</span>
              <span className="material-symbols-outlined-2">&#xe8b6;</span>
              <span className="material-symbols-outlined-3">&#xe8b6;</span>
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
            <td className='table-server-table-2'>3PM Server</td>
            <td className='table-server-table-3'>http://3pm.nascop.org</td>
            <td className='table-server-table-4'>12/07/2023 12:20</td>
            <td className='table-server-table-5'>Complete</td>
            <td>
              <div className="linked-sessions">
              <span className="material-symbols-outlined-1">&#xe8b6;</span>
              <span className="material-symbols-outlined-2">&#xe8b6;</span>
              <span className="material-symbols-outlined-3">&#xe8b6;</span>
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
            <td className='table-server-table-2'>DATIM Server</td>
            <td className='table-server-table-3'>http://datim.org</td>
            <td className='table-server-table-5'>01/07/2023 04:25</td>
            <td className='table-server-table-5'>Pending</td>
            <td>
              <div className="linked-sessions">
              <span className="material-symbols-outlined-1">&#xe8b6;</span>
              <span className="material-symbols-outlined-2">&#xe8b6;</span>
              <span className="material-symbols-outlined-3">&#xe8b6;</span>
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
            <td className='table-server-table-2'>DHIS2 Server 1</td>
            <td className='table-server-table-3'>http://dhisserver2.com</td>
            <td className='table-server-table-6'>17/07/2023 13:00</td>
            <td className='table-server-table-5'>Failed</td>
            <td>
              <div className="linked-sessions">
              <span className="material-symbols-outlined-1">&#xe8b6;</span>
              <span className="material-symbols-outlined-2">&#xe8b6;</span>
              <span className="material-symbols-outlined-3">&#xe8b6;</span>
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
            <td className='table-server-table-2'>DHIS2 Server 3</td>
            <td className='table-server-table-3'>http://dhisserver3.org</td>
            <td className='table-server-table-6'>17/07/2023 13:00</td>
            <td className='table-server-table-5'>Failed</td>
            <td>
              <div className="linked-sessions">
              <span className="material-symbols-outlined-1">&#xe8b6;</span>
              <span className="material-symbols-outlined-2">&#xe8b6;</span>
              <span className="material-symbols-outlined-3">&#xe8b6;</span>
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
