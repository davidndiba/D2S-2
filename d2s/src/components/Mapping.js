import React from 'react';
import Sidebar from '../pages/SideView';
import Navbar1 from '../pages/Navbar1';

const Mapping =() => {
    return(
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9" id="content">
            <Navbar1/>
            </div>
            </div>
            </div>

    )
}
export default Mapping;