//import express from "express";

//const router = express.Router();

import express from "express";

import { createTime, deleteTime, readAllTimes, updateTime } from "../controllers/badgeExaminerTimeTable.js";

const router=express.Router();

//create
router.post("/",createTime)
//update
router.put("/:id",updateTime)
//delete
router.delete("/:id",deleteTime)


//read all
router.get("/",readAllTimes);




export default router