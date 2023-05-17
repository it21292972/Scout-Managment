import express, { Router } from "express";
import FindExaminer from "../models/FindExaminer.js";
const router = express.Router();

//CREATE
router.post("/",async(req,res)=>{
   
    const newFind = new FindExaminer(req.body)
   

    try {
        const savedFind = await newFind.save()
        res.status(200).json(savedFind)
    } catch (err) {
        res.status(500).json(err)
        }
    });

//GET ALL



router.get("/",async(req,res)=>{   

    try {
        const AllcontactDetails = await FindExaminer.find();
        res.status(200).json(AllcontactDetails)
    } catch (err) {
        res.status(500).json(err)
        }
    });
    




export default router
