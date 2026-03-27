import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Register from './components/Register';
import CVDetails from './components/CVDetails';
import CVList from './components/CVList';
import MyNavbar from './components/Navbar';
import Login from './components/Login';
import UpdateCV from './components/UpdateCV';

// import Login from './components/Login';
// import UpdateCV from './components/UpdateCV';

function App() {
  return (
    <Router>
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<CVList/>} />
        <Route path="/cv/:id" element={<CVDetails/>} />
        <Route path="/register" element={<Register/>} />
        {<Route path="/login" element={<Login/>} /> }
        {<Route path="/update" element={<UpdateCV />} /> }
      </Routes>
    </Router>
  );
}

export default App;