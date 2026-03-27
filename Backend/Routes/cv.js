const express = require('express');
const router = express.Router();
const { getAllCVs, getCVById, searchCVs, updateCV } = require('../controllers/cvController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', getAllCVs);
router.get('/search', searchCVs);
router.get('/:id', getCVById);
router.put('/update', authenticateToken, updateCV);

module.exports = router;