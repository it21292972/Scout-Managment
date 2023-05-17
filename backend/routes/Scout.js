import express from "express";
import scout from "../models/Scout.js";
const router = express.Router();




router.post("/",async(req,res)=>{
   
    const newScout = new scout(req.body)

    try {
        const savedscout = await newScout.save()
        res.status(200).json(savedscout)
    } catch (err) {
        res.status(500).json(err)
        }
    });
//http://localhost:5000/Scout/add

/*router.route("/add").post((req,res)=>{
    
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const id = req.body.id;
    const date_of_birth = req.body.last_name;
    const user_name = req.body.user_name;
    const password = req.body.password;
    const registration_number = Number(req.body.registration_number);
    const troop_name = req.body.troop_name;
    const troop_number = req.body.troop_number;
    const date_of_join = req.body.date_of_join;
    const address = req.body.address;
    const mobile = Number(req.body.mobile);
    const name_of_the_guardian = req.body.name_of_the_guardian;
    const guardian_contact = Number(req.body.guardian_contact);


const newScout = new scout({

    first_name,
    last_name,
    id,
    date_of_birth,
    user_name,
    password,
    registration_number,
    troop_name,
    troop_number,
    date_of_join,
    address,
    mobile,
    name_of_the_guardian,
    guardian_contact

})

newScout.save().then(()=>{
    res.json("Scout Added")
}).catch((err)=>{
    console.log(err)

})

})*/

//http://localhost:8070/Scout/get/gryfghkjioj

router.route("/").get((req,res)=>{
scout.find().then((Scouts)=>{
    res.json(Scouts)
}).catch((err)=>{
    console.log((err))
})
})


//DELETE
router.route("/delete/:id").delete(async(req,res)=>{
    let scoutID = req.params.id;

    await scout.findByIdAndDelete(scoutID)
        .then(()=>{
        res.status(200).send({status: "scout deleted"});
    })
        .catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete scout", error: err.message});
    })
})


//GET single row
router.get("/:id",async(req,res)=>{   

    try {
        const Details = await scout.findById(req.params.id);
        res.status(200).json(Details)
    } catch (err) {
        res.status(500).json(err)
        }
    });

//update route
router.route("/update/:id").put(async(req,res)=>{
    let scoutID = req.params.id;
    const { first_name, last_name, registration_number, password} = req.body;

    const updateScout ={
        first_name,
        last_name,
        registration_number,
        password
    }

    const update = await scout.findByIdAndUpdate(scoutID, updateScout)
    .then(()=>{
        res.status(200).send({status: "scout data updated"});
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating scoutmaster data",error: err.message});
    })    
})







export default router