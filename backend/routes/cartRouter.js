import mongoose from "mongoose";
import express from 'express'
import { AddItem, getCart } from "../controllers/cartController.js";

const cartRouter = express.Router();
cartRouter.post("/", AddItem)
cartRouter.get("/", getCart)
export default cartRouter;