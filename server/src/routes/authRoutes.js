const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware'); 

router.post('/sync', verifyToken, authController.syncUser);

router.post('/logout', authController.logout);

module.exports = router;