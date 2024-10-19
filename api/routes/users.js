import express from "express";
import { } from "../controllers/user.js";

const router = express.Router()

router.post("/", addUser)

export default router