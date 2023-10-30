const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createNewThought,
    updateThoughtById,
    deleteThoughtById,
    createNewReaction,
    deleteReactionById,

} = requrire ('../../controllers/thoughtControllers.js')

// /api/thoughts
router.route('/').get(getThoughts).post(createNewThought);

// /api/thought/:_id
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById)

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createNewReaction)
    .delete(deleteReactionById)

module.exports = router;