// This file contains the routes for the user

const userMiddleware = require("../middleware");
const express = require("express");
const User = require("../models");
const zod = require("zod");
const router = express.Router();

const userSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8),
});

const cardSchema = zod.object({
    cardName: zod.string(),
    cardDescription: zod.string(),
    linkedinUrl: zod.string().url(),
})

router.post("/user/signup", async (req, res) => {
    const zodVerified = userSchema.safeParse(req.body);
    if (!zodVerified.success) return res.status(400).send("Invalid data");
    const user = await User.create(zodVerified.data);
    res.send(user);
});

router.post("/user/login", userMiddleware, (req, res) => {
    res.status(200).send(req.user);
});

router.post("/createCard", userMiddleware, async (req, res) => {
    const card = cardSchema.safeParse(req.body);
    if (card.success) await UserCard.create(card.data);
    else return res.status(400).send("Invalid data");
    res.status(200).send("Card created");
});

router.post("/get-cards", userMiddleware, async (req, res) => {
    const user = await User.findOne({username: req.headers.username, password: req.headers.password});
    const cardIds = user.cards
    const cards = await UserCard.find({_id: {$in: cardIds}});
    res.status(200).send(cards);
});

module.exports = router;