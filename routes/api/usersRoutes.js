const router = require('express').Router();

const {
    getUsers,
    createNewUser,
    getUserById,
    updateUserById,
    deleteUserById,
} = requrire ('../../controllers/userControllers.js')

// /api/users
router.route('/').get(getUsers).post(createNewUser);

// api/user/:_id
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById)

module.exports = router; 


