// Handles the authentication for the admin

const Admin = require("../models");

const adminMiddleware = async (req, res, next) => {
    const admin = await Admin.findOne({
        username: req.headers.username,
        password: req.headers.password
    });
    if (!admin) return res.status(401).send("Unauthorized");
    next();
}

module.exports = adminMiddleware;