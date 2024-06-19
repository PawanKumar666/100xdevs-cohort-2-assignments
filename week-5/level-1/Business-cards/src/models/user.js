// This file contains the schema for the user related models

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cards: [{type: mongoose.Schema.Types.ObjectId, ref: "UserCard"}]
})

const User = mongoose.model("User", UserSchema);

module.exports = User;