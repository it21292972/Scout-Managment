import express from "express";
import user from "../models/user.js";
const router = express.Router();




//http://localhost:8070/user/add

router.route("/add").post((req,res)=>{
    
    const user_name = req.body.user_name;
    const password = req.body.password;


const newUser = new user({

    user_name,
    password

})

newUser.save().then(()=>{
    res.json("login")
}).catch((err)=>{
    console.log(err)

})

})


//DELETE
router.route("/delete/:id").delete(async(req,res)=>{
    let userID = req.params.id;

    await user.findByIdAndDelete(userID)
        .then(()=>{
        res.status(200).send({status: "user deleted"});
    })
        .catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})




http://localhost:8070/user

router.route("/").get((req,res)=>{
user.find().then((user)=>{
    res.json(user)
}).catch((err)=>{
    console.log((err))
})
})

export default router