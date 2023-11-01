const User = require("../models/user");
const rol = require("../models/rol.js");

module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json(users);
  },

  newUser: async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(200).json(user);
  },

  getUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  },

  replaceUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ success: true });
  },

  updateUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ success: true });
  },

  deleteUser: async (req, res, next) => {
    const { userId } = req.params;
    await User.findByIdAndRemove(userId);
    res.status(200).json({ success: true });
  },

  getUserrol: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("rol");
    res.status(200).json(user);
  },

  newUserrol: async (req, res, next) => {
    const { userId } = req.params;
    const newrol = new rol(req.body);
    const user = await User.findById(userId);
    newrol.seller = user;
    await newrol.save();
    user.roles.push(newrol);
    await user.save();
    res.status(201).json(newrol);
  },
};
