const router = require('express').Router();

const {
    getUsers,
    createNewUser,
    getUserById,
    updateUserById,
    deleteUserById,
    createNewFriend,
    deleteNewFriend,
} = require ('../../controllers/userControllers.js')

// /api/users
router.route('/').get(getUsers).post(createNewUser);

// /api/users/:userId
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById)

// /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(createNewFriend)
    .delete(deleteNewFriend)

module.exports = router; 


