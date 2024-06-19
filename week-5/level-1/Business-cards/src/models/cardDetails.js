// This file contains the schema for the user card related models

const mongoose = require("mongoose");

const UserCardSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cardName: { type: String, required: true },
  cardDescription: { type: String, required: true },
  linkedInUrl: { type: String, required: true }
});

const UserCard = mongoose.model('UserCard', UserCardSchema);

module.exports = UserCard;
