const express = require('express');
const router = express.Router();

// Import controller functions
const {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    patchUser,
    deleteUser
} = require('../controllers/users.controller');

// Users routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', addUser);
router.put('/:id', updateUser);
router.patch('/:id', patchUser);
router.delete('/:id', deleteUser);

// Export the router
module.exports = router;