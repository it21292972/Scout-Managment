import express from "express";
import { createRequest, deleteRequest, readAllRequest, readRequest, readSpecificRequests, updateeRequest } from "../controllers/badgeExaminerRequest.js";

const router=express.Router();

//create
router.post("/",createRequest)
//update
router.put("/:id",updateeRequest)
//delete
router.delete("/:id",deleteRequest)
//read
router.get("/:id",readRequest)
//read all
router.get("/",readAllRequest);
//read specific requests
router.get("/examiner/:id", readSpecificRequests);



export default router