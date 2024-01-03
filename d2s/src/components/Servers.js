import React from 'react';
import Sidebar from '../pages/SideView';

const Servers =() => {
    return(
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9" id="content">
            <h1>Servers</h1><hr/><br/>
        </div>
        </div>
        </div>
        
    )
}

export default Servers;