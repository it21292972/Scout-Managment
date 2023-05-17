

import express from "express";

import { createTime, deleteTime, readAllTimes, updateTime } from "../controller/calendarcontroller.js";

const router=express.Router();

//create
router.post("/",createTime)
//update
router.put("/:id",updateTime)
//delete
router.delete("/:id",deleteTime)
//read

//read all
router.get("/",readAllTimes);
//read specific requests



export default router