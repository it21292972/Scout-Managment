import express from "express";
import ScoutMaster from "../models/smmodel.js"

const router = express.Router();

//create
router.post("/", async(req,res)=>{
    const newScoutMaster= new ScoutMaster(req.body)
    
    try {
        const savedScoutMaster = await newScoutMaster.save()
        res.status(200).json(savedScoutMaster)
        
    } catch (error) {
        res.status(500).json(err)
    }
})

//delete
router.delete("/:id", async(req,res)=>{
    try {
        await ScoutMaster.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Scout Master has been deleted")
        
    } catch (error) {
        res.status(500).json(err)
    }
})
//Get specific
router.get("/:id", async(req,res)=>{
    
    try {
        const scoutmaster = await ScoutMaster.findById(
            req.params.id
        );
        res.status(200).json(scoutmaster)
        
    } catch (error) {
        res.status(500).json(err);
    }
});
//Get All
router.get("/", async(req, res)=>{
    try {
        const allscoutmasters = await ScoutMaster.find();
        res.status(200).json(allscoutmasters);
        
    } catch (error) {
        res.status(500).json(err);
    }
});
export default router