import React from 'react';
import Sidebar from '../pages/SideView';
import Navbar1 from '../pages/Navbar1';
import ServersRow from '../pages/ServersRow';
import SearchBar from '../pages/SearchBar'
import ServersTable from '../pages/ServersTable';
import './Server.css'

const Servers =() => {
    return(
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9" id="content">
            <Navbar1/>
            <h1 className='content-4'>Servers</h1>
            <h2 className='content-5'>DHIS2 Instances</h2>
            <ServersRow/>
            <SearchBar/>
            <ServersTable/>
        </div>
        </div>
        </div>
        
    )
}

export default Servers;