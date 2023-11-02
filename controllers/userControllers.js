const { User, Thought } = require('../models');
const { findOneAndDelete, findOneAndUpdate } = require('../models/Thought');
const { findOneAndRemove } = require('../models/User');

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
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true });
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const deleteUserById = async (req, res) => {
    try {
        const user = await User.findOneAndRemove({ _id: req.params.userId });

        if (user.thoughts.length === 0) {
            console.log('There are no thoughts associated with this user');
        }

        else {
            await Thought.deleteMany({ _id: { $in: user.thoughts } });
        }
        res.json({ message: "User and that User's thoughts have been deleted" });
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const createNewFriend = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        );
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const deleteNewFriend = async (req, res) => {
    try {
        console.log(req.params.userId);
        console.log(req.params.friendId);
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        

        if (!user) {
            return res.status(404).json({message: 'no user with this id'})
        }
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { getUsers, createNewUser, getUserById, updateUserById, deleteUserById, createNewFriend, deleteNewFriend }