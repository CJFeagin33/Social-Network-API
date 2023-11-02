const { User, Thought } = require ('../models');

const getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find()
        res.json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const createNewThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body)
        const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: thought._id } },
            { runValidators: true, new: true }
        );
        res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        return res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const updateThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true });
        res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const deleteThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No such thought exists' })
            }

            res.json({ message: 'Thought deleted' });
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const createNewReaction = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        );

        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }

        res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const deleteReactionById = async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.body.reactionId } } },
            { runValidators: true, new: true }
        )

        if (!reaction) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }

        res.json({message: "reaction deleted!"});
        }
        catch (err) {
            res.status(500).json(err);
        }
}


module.exports = { getThoughts, createNewThought, getThoughtById, updateThoughtById, deleteThoughtById, createNewReaction, deleteReactionById}