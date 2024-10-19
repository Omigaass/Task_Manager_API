import express from "express";
import { addUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router()

router.post("/", addUser)

router.get("/", getUsers)

router.put("/:id", updateUser)

export default router