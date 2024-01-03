// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Overview from './components/Overview';
;

const App = () => {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='overview' element={<Overview/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
