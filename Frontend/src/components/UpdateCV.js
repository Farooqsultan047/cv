import React, { useState, useEffect } from 'react';
import API from '../api';

function UpdateCV() {
  const [form, setForm] = useState({
    name: '',
    keyprogramming: '',
    profile: '',
    education: '',
    URLlinks: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load current user's CV
    API.get('/cvs/me', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(res => setForm(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await API.put('/cvs/me', form, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error updating CV');
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '600px' }}>
      <h2>Update Your CV</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Key Programming Language</label>
          <input type="text" name="keyprogramming" className="form-control" value={form.keyprogramming} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Profile</label>
          <textarea name="profile" className="form-control" value={form.profile} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Education</label>
          <textarea name="education" className="form-control" value={form.education} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Links (URLs)</label>
          <input type="text" name="URLlinks" className="form-control" value={form.URLlinks} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Update CV</button>
      </form>
    </div>
  );
}

export default UpdateCV;