import express from "express";
import badgeReqe from "../models/SPbadgereq.js";

const router = express.Router();



router.post("/add",async(req,res)=>{
   
    const newBreq = new badgeReqe(req.body)

    try {badgereq
        const savedreq = await newBreq.save()
        res.status(200).json(savedreq)
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

    badgeReqe.find().then((badgereqs)=>{
        res.json(badgereqs);
    }).catch((err)=>{
        console.log(err);
    })
})

//update route
router.route("/update/:id").put(async(req,res)=>{
    let BReq = req.params.id;
    const { send,approve} = req.body;

    const updateReq ={
        send,
        approve
    }

    const update = await badgeReqe.findByIdAndUpdate(BReq, updateReq)
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
    let BReq = req.params.id;

    await badgeReqe.findByIdAndDelete(BReq)
        .then(()=>{
        res.status(200).send({status: "Badge Request deleted"});
    })
        .catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Badge Request", error: err.message});
    })
})
//GET 
router.get("/:id",async(req,res)=>{   

    try {
        const Details = await badgeReqe.findById(req.params.id);
        res.status(200).json(Details)
    } catch (err) {
        res.status(500).json(err)
        }
    });







export default router
