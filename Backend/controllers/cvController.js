const db = require('../config/db');

exports.getAllCVs = (req, res) => {
  const { search } = req.query;
  let sql = 'SELECT id, name, email, keyprogramming FROM cvs';
  const params = [];

  if (search) {
    sql += ' WHERE name LIKE ? OR keyprogramming LIKE ?';
    params.push(`%${search}%`, `%${search}%`);
  }

  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json(results);
  });
};

exports.getCVById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM cvs WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length === 0) return res.status(404).json({ message: 'CV not found' });
    res.json(results[0]);
  });
};

exports.searchCVs = (req, res) => {
  const { query } = req.query;
  const sql = `SELECT id, name, email, keyprogramming FROM cvs 
               WHERE name LIKE ? OR keyprogramming LIKE ?`;
  const search = `%${query}%`;
  db.query(sql, [search, search], (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json(results);
  });
};

exports.updateCV = (req, res) => {
  const { id } = req.user; // from JWT
  const { name, keyprogramming, profile, education, URLlinks } = req.body;
  const sql = `UPDATE cvs SET name = ?, keyprogramming = ?, profile = ?, education = ?, URLlinks = ? WHERE id = ?`;
  db.query(sql, [name, keyprogramming, profile, education, URLlinks, id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json({ message: 'CV updated successfully' });
  });
};