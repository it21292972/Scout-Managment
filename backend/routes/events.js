import express from "express";
import event from "../models/event.js";

const router = express.Router();

//Create
router.route("/add").post((req,res)=>{
    const eventAttendance = Number(req.body.eventAttendance);
    const  eventDetails = req.body. eventDetails;
    const eventBudget  = Number(req.body.eventBudget );
    const eventsId = Number(req.body.eventsId );

    const  newEvent = new event({
        eventAttendance,
        eventDetails,
        eventBudget,
        eventsId
    })

    newEvent.save().then(()=> {
        res.json("Event Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//Get
router.route("/").get((req,res)=>{

    event.find().then((events)=>{
        res.json(events);
    }).catch((err)=>{
        console.log(err);
    })
})
//GET single row
router.get("/:id",async(req,res)=>{   

    try {
        const Details = await event.findById(req.params.id);
        res.status(200).json(Details)
    } catch (err) {
        res.status(500).json(err)
        }
    });

//Update
router.route("/update/:id").put(async(req,res)=>{
    let eventId = req.params.id;
    const {eventAttendance, eventDetails,  eventBudget, eventsId} = req.body;

    const updateEvent ={
        eventAttendance,
        eventDetails,
        eventBudget,
        eventsId
    }

    const update = await event.findByIdAndUpdate(eventId, updateEvent)
    .then(()=>{
        res.status(200).send({status: "Event data updated"});
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating event data",error: err.message});
    })    
})

//Delete
router.route("/delete/:id").delete(async(req,res)=>{
    let eventId = req.params.id;

    await event.findByIdAndDelete(eventId)
        .then(()=>{
        res.status(200).send({status: "event deleted"});
    })
        .catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting event", error: err.message});
    })
})



export default router;