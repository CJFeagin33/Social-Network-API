const { User, Thought } = require ('../models');

const getThoughts = async (req, res) => {
    try {
    const thoughts = await User.find()
        res.json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const createNewThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body)
        res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.create(req.body)
        res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const updateThoughtById = async (req, res) => {
    try {
        const thought = await Thought.create(req.body)
        res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const deleteThoughtById = async (req, res) => {
    try {
        const thought = await Thought.create(req.body)
        res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const createNewReaction = async (req, res) => {
    try {
        
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const deleteReactionById = async (req, res) => {
    try {
        
        }
        catch (err) {
            res.status(500).json(err);
        }
}


module.exports = { getThoughts, createNewThought, getThoughtById, updateThoughtById, deleteThoughtById, createNewReaction, deleteReactionById}