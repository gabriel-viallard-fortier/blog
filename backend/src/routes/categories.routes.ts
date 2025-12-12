const express = require('express');
const router = express.Router();


// Import controller functions
const {
    getAllCategories,
    getCategoryById,
    createCategory,
    editCategory,
    deleteCategory
} = require('../controllers/categories.controller');


// Categories routes
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/', createCategory);
router.put('/:id', editCategory);
router.delete('/:id', deleteCategory);


// Export the router
module.exports = router;