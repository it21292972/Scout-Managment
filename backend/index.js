import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

//Sayuru additional (start)
import Addberoute from "./routes/Addberoute.js"
import smroute from "./routes/smroute.js"
import calendarRoute from "./routes/calendarRoute.js"
//Sayuru additional (end)

//Shashi additional (start)
import badgeRequest from "./routes/badgeExaminerRequest.js"
import badgeExamineTime from "./routes/badgeExaminerTimeTable.js"
import badgeIssueOrder from "./routes/badgeIssuOrder.js"
//Shashi additional (end)

//Ruhan additional (start)
import eventsRoute from "./routes/events.js";
//Ruhan additional (end)

//Rusith additional (start)
import productsRoute from "./routes/products.js";
import supplierRoute from "./routes/suppliers.js";
//Rusith additional (end)

//Supun additional (start)
import badgeRoute from "./routes/Badgerequest.js"
import ScoutProfRoute from "./routes/ScoutProfile.js"
import FindExaminerRoute from "./routes/findexaminer.js"
//Supun additional (end)

//Shakya additional (start)
import productRouter from './routes/productRouter.js'
import cartRouter from './routes/cartRouter.js'
import cookieParser from 'cookie-parser'
import  {fileURLToPath} from 'url'
import path,{dirname} from 'path'
import sessions from 'express-session'
import cors from 'cors'
//Shakya additional (end)

//Sadeeka additional (start)
import scoutRoute from "./routes/Scout.js";
import badgereqRoute from "./routes/badgereq.js";
import ScoutMasterRoute from "./routes/ScoutMaster.js";
import userRoute from "./routes/user.js";
import notificationRoute from "./routes/notificationBR.js";
//Sadeeka additional (end)

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    } catch (error) {
        throw(error);
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected")
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


//middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(__dirname))
app.use(cookieParser())
app.use(cors())

//Sayuru additional (start)
app.use("/addbe", Addberoute);
app.use("/sm", smroute);
app.use("/calendar",calendarRoute);
//Sayuru additional (end)

//Shashi additional (start)
app.use("/badgeRequest", badgeRequest);
app.use("/badgeExamineTime", badgeExamineTime);
app.use("/badgeIssueOrder", badgeIssueOrder);
//Shashi additional (end)

//Ruhan additional (start)
app.use("/event",eventsRoute );
//Ruhan additional (end)

//Rusith additional (start)
app.use("/product", productsRoute);
app.use("/supplier", supplierRoute);
//Rusith additional (end)

//Supun additional (start)
app.use("/Badgerequest",badgeRoute);
app.use("/ScoutProf",ScoutProfRoute);
app.use("/findexaminer" ,FindExaminerRoute);
//Supun additional (end)

//Shakya additional (start)
app.use("/products",productRouter)
app.use("/cart",cartRouter)
//Shakya additional (end)

//Sadeeka additional (start)
app.use("/scout",scoutRoute);
app.use("/ScoutMaster",ScoutMasterRoute);
app.use("/User",userRoute);
app.use("/badgereq",badgereqRoute);
app.use("/notificationBR",notificationRoute);
//Sadeeka additional (end)

app.listen(5000, ()=>{
    connect()
    console.log("Connected to backend")
});