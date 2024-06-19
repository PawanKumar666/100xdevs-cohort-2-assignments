import User from "./user";
import Admin from "./admin";
import UserCard from "./cardDetails";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://ssppawankumar001:Ov5RRzaniXGfeyuX@cluster0.qkehmtf.mongodb.net/card-app');

module.exports = {User, Admin, UserCard};