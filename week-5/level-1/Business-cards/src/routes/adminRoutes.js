// This file contains the routes for the admin

import {Admin, User, UserCard} from "../models";

const AdminMiddleware = require("../middleware");
const express = require("express");
const zod = require("zod");
const router = express.Router();

const adminSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8),
});

router.post("/admin/signup", async (req, res) => {
    const zodVerified = adminSchema.safeParse(req.body);
    if (!zodVerified.success) return res.status(400).send("Invalid data");
    const user = await Admin.create(zodVerified.data);
    res.send(user);
});

router.post("/admin/login", AdminMiddleware, async (req, res) => {
    res.status(200).send(req.user);
});

router.get("/admin/users-with-access", AdminMiddleware, async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const admin = await Admin.findOne({username: username, password: password});
    const sharedUsers = admin.canAccess;
    const users = await User.find({_id: {$in: sharedUsers}});
    res.send(users); // Returns the list of users who can be accessed by the admin
});

router.get("/admin/user/:id/cards", AdminMiddleware, async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    const cardIds = user.cards;
    const cards = await UserCard.find({_id: {$in: cardIds}});
    res.send(cards);
});

module.exports = router;