// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Overview from './components/Overview';
import Servers from './components/Servers';

const App = () => {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='overview' element={<Overview/>} />
          <Route path="servers/:id?" element={<Servers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
