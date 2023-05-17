import express from "express";
import { badgeIssueOrder, deleteOrder, readAllOrders, readOrder, updateOrder } from "../controllers/badgeIssuOrder.js";

const router=express.Router();

//create
router.post("/",badgeIssueOrder)
//update
router.put("/:id",updateOrder)
//delete
router.delete("/:id",deleteOrder)
//read
router.get("/:id",readOrder)
//read all
router.get("/",readAllOrders);




export default router