import express from "express";
import badgeReq from "../models/badgeReq.js";
const router =  express.Router();


//CREATE
router.post("/",async (req,res) =>{
    const newRequest = new badgeReq(req.body)
    try{
const savedRequest = await newRequest.save()
res.status(200).json(savedRequest)
    }catch(err){
res.status(500).json(err)
    }
    
});

//UPDATE
router.put("/:id",async (req,res) =>{
    try{       
const updatedRequest = await badgeReq.findByIdAndUpdate(req.params.id, { $set:req.body}, {new:true})
res.status(200).json(updatedRequest);
    }catch(err){
res.status(500).json(err)
    }
    
});

//DELETE
router.delete("/:id",async (req,res) =>{
    try{       
await badgeReq.findByIdAndDelete(req.params.id, );
res.status(200).json("Request has been deleted");
    }catch(err){
res.status(500).json(err)
    }
    
});

//GET
router.get("/:id",async (req,res) =>{
    try{       
const request = await badgeReq.findById(req.params.id, );
res.status(200).json(request);
    }catch(err){
res.status(500).json(err)
    }
    
});

//GET ALL
router.get("/",async (req,res) =>{
    try{       
const requests = await badgeReq.find();
res.status(200).json(requests);
    }catch(err){
res.status(500).json(err)
    }
    
});



export default router





















/*const router = require("express").Router();
let badgeReq = require("../models/badgeReq");

router.route("/add").post((req,res)=>{
    const Section = req.body.Section
    const Name = req.body.Name
    const Reg_No = Number(req.body.Reg_No)
    const Badge = req.body.Badge
    const Troop_No = Number(req.body.Troop_No)
    const Badge_Examiner = req.body.Badge_Examiner
    
    const newRequest = new badgeReq({
        Section,
        Name,
        Reg_No,
        Badge,
        Troop_No,
        Badge_Examiner
    })

    newRequest.save().then(()=>{
        res.json("Request Added")
    }).catch((err)=>{
        console.log(err);
    })


})






module.exports = router;
*/