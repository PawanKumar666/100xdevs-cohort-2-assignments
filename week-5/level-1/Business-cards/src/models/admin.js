const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    canAccess: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
});
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;