const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/profile/:uid', userController.getUserProfile);

router.put('/update', verifyToken, userController.updateProfile);

router.post('/follow/:targetUserId', verifyToken, userController.followUser);
router.post('/unfollow/:targetUserId', verifyToken, userController.unfollowUser);

module.exports = router;
