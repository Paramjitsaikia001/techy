const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/', postController.getAllPosts); 

router.post('/', verifyToken, postController.createPost); 

module.exports = router;