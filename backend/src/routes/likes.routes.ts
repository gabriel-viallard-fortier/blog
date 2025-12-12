const express = require('express');
const router = express.Router();

// Import controller functions
const {
    getLikesByArticleId,
    addLike,
    removeLike
} = require('../controllers/likes.controller');

// Likes routes
router.get('/article/:articles_id', getLikesByArticleId);
router.post('/article/:articles_id/user/:users_id', addLike);
router.delete('/article/:articles_id/user/:users_id', removeLike);

// Export the router
module.exports = router;