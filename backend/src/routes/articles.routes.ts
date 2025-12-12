const express = require('express');
const router = express.Router();

// Import controller functions
const {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
} = require('../controllers/articles.controller');

// Articles routes
router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

// Export the router
module.exports = router;