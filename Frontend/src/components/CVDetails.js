import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

function CVDetails() {
  const { id } = useParams();
  const [cv, setCV] = useState({});

  useEffect(() => {
    API.get(`/cvs/${id}`)
      .then(res => setCV(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2>{cv.name}</h2>
        </div>
        <div className="card-body">
          <p><strong>Email:</strong> {cv.email}</p>
          <p><strong>Key Programming:</strong> {cv.keyprogramming || 'N/A'}</p>
          <p><strong>Profile:</strong> {cv.profile || 'N/A'}</p>
          <p><strong>Education:</strong> {cv.education || 'N/A'}</p>
          <p><strong>Links:</strong> {cv.URLlinks || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}

export default CVDetails;