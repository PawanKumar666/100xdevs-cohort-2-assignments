// Handles the authentication for the user

const User = require("../models");

const userMiddleware = async (req, res, next) => {
    const user = await User.findOne({
        username: req.headers.username,
        password: req.headers.password
    });
    if (!user) {
        res.status(401).send("Unauthorized");
        return;
    }
    next();
}

module.exports = userMiddleware;