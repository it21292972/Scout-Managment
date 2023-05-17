import express from "express";
import BadgeExaminer from "../models/Addbemodel.js"

const router = express.Router();

//create
router.post("/", async(req,res)=>{
    const newBadgeExaminer= new BadgeExaminer(req.body)
    
    try {
        const savedBExaminer = await newBadgeExaminer.save()
        res.status(200).json(savedBExaminer)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete
router.delete("/:id", async(req,res)=>{
    try {
        await BadgeExaminer.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Badge Examiner has been deleted")
        
    } catch (error) {
        res.status(500).json(error)
    }
})
//Get specific
router.get("/:id", async(req,res)=>{
    
    try {
        const badgeexaminer = await BadgeExaminer.findById(
            req.params.id
        );
        res.status(200).json(badgeexaminer)
        
    } catch (error) {
        res.status(500).json(error);
    }
});
//Get All
router.get("/", async(req, res)=>{
    try {
        const allbadgeexaminers = await BadgeExaminer.find();
        res.status(200).json(allbadgeexaminers);
        
    } catch (error) {
        res.status(500).json(err);
    }
});
export default router