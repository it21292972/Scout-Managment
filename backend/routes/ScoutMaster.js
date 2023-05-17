import express from "express";
import scoutMaster from "../models/ScoutMaster.js";
const router = express.Router();



router.post("/add",async(req,res)=>{
   
    const newScoutMaster = new scoutMaster(req.body)

    try {
        const savedscoutscoutmaster = await newScoutMaster.save()
        res.status(200).json(savedscoutscoutmaster)
    } catch (err) {
        res.status(500).json(err)
        }
    });
//add route
// router.route("/add").post(async(req,res)=>{
    
//     const first_Name = req.body.first_Name;
//     const last_Name = req.body.last_Name;
//     const MID = req.body.MID;
//     const TID = req.body.TID;

//     const newScoutmaster= new scoutMaster({
//         first_Name,
//         last_Name,
//         MID,
//         TID
//     })

//     await newScoutmaster.save().then(()=> {
//         res.json("scoutmaster Added")
//     }).catch((err)=>{
//         console.log(err);
//     })
// })

//get route
router.route("/").get((req,res)=>{

    scoutMaster.find().then((scoutmasters)=>{
        res.json(scoutmasters);
    }).catch((err)=>{
        console.log(err);
    })
})

//update route
router.route("/update/:id").put(async(req,res)=>{
    let scoutMasterID = req.params.id;
    const { firstName, lastName, MID, TID} = req.body;

    const updateScoutmaster ={
        firstName,
        lastName,
        MID,
        TID
    }

    const update = await scoutMaster.findByIdAndUpdate(scoutMasterID, updateScoutmaster)
    .then(()=>{
        res.status(200).send({status: "scoutmaster data updated"});
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating scoutmaster data",error: err.message});
    })    
})

//delete route

router.route("/delete/:id").delete(async(req,res)=>{
    let scoutMasterID = req.params.id;

    await scoutMaster.findByIdAndDelete(scoutMasterID)
        .then(()=>{
        res.status(200).send({status: "scoutmaster deleted"});
    })
        .catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete scoutmaster", error: err.message});
    })
})
//GET 
router.get("/:id",async(req,res)=>{   

    try {
        const Details = await scoutMaster.findById(req.params.id);
        res.status(200).json(Details)
    } catch (err) {
        res.status(500).json(err)
        }
    });







export default router
