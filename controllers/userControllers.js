const { User, Thought } = require ('../models');

const getUsers = async (req, res) => {
    try {
    const users = await User.find()
        res.json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const createNewUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const updateUserById = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({_id:req.params.userId},
            {$set: req.body}, 
            {runValidators: true, new: true})
        res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const deleteUserById = async (req, res) => {
    try {
        const user = await User.findOneAndRemove({_id: req.params.userId})
        res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const createNewFriend = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
}

const deleteNewFriend = async (req, res) => {
    try {
        
        }
        catch (err) {
            res.status(500).json(err);
        }
}

module.exports = { getUsers, createNewUser, getUserById, updateUserById, deleteUserById, createNewFriend, deleteNewFriend}