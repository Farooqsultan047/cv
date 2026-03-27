import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MyNavbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">AstonCV</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {!token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            )}

            {token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/update">Update CV</Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link" style={{ cursor: 'pointer' }} onClick={handleLogout}>Logout</span>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;