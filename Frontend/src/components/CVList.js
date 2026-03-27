import React, { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';

function CVList() {
  const [cvs, setCVs] = useState([]);
  const [search, setSearch] = useState('');

  const fetchCVs = async (query = '') => {
    try {
      const res = await API.get(`/cvs${query ? `?search=${query}` : ''}`);
      setCVs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCVs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCVs(search);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All CVs</h2>

      {/* Search form */}
      <form className="mb-4 row g-2" onSubmit={handleSearch}>
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name or key programming"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-primary w-100">Search</button>
        </div>
      </form>

      {/* CV list */}
      <div className="row">
        {cvs.map(cv => (
          <div className="col-md-4 mb-3" key={cv.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{cv.name}</h5>
                <p className="card-text">
                  Key Programming: {cv.keyprogramming || 'N/A'}
                </p>
                <Link className="btn btn-primary" to={`/cv/${cv.id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVList;