
import './App.css';
import "./App.css"

import {BrowserRouter,Routes,Route,} from "react-router-dom";

//Sayuru additional (start)
import Dash from'./pages/dash page/dash.jsx'
import Addbe from './pages/Addbe/Addbe'
import Viewbe from './pages/viewbe/view';
import UpdateUser from './pages/update user profile/updateUser';
import CalendarPage from './pages/Calendar/CalendarPage';
import CreateSM from './pages/createSM/createSM';
//Sayuru additional (end)

//Shashi additional (start)
import Login from "./pages/login/Login";
import BadgeExaminerRB from "./pages/badgeExaminer/BadgeExaminerRB";
import BadgeExaminerTT from "./pages/badgeExaminer/BadgeExaminerTT";
import BadgeSecretaryBO from "./pages/badgeSecertary/BadgeSecretaryBO";
import BadgeExaminerBIR from "./pages/badgeExaminer/BadgeExaminerBIR"
import BadgeExaminerBOU from "./pages/badgeExaminer/BadgeExaminerBOU";
import BadgeSecretaryUBO from "./pages/badgeSecertary/BadgeSecretaryUBO";
//Shashi additional (end)

//Ruhan additional (start)
import Home from "./pages/home/Home.jsx";
import ViewEvent from "./pages/ViewEventPage/ViewEvent.jsx";
import AddEvent from "./pages/AddEvent/AddEvent.jsx";
import UpdateEvent from "./pages/updateEvent/UpdateEvent.jsx";
import Calculation from "./pages/calculation/Calculation.jsx";
//Ruhan additional (end)

//Rusith additional (start)
import Supplierdash from "./pages/supplierDashboard/SupplierDash";
import Inventorydash from "./pages/inventoryDashboard/InventoryDash";
import Addsupplier from "./pages/addNewSupplier/NewSupplier";
import Addproduct from "./pages/addNewProduct/NewProduct";
import Updateproduct from "./pages/updateProduct/UpdateProduct";
import Updatesupplier from "./pages/updateSupplier/UpdateSupplier";
//Rusith additional (end)

//Supun additional (start)
import ScoutHome from "./pages/home/ScoutHome";
import BadgeReq from "./pages/badgereqpage/BadgeReq";
import ScoutProf from "./pages/scoutprofile/ScoutProf";
import FindExaminer from "./pages/findBadgeExaminer/FindBexaminer";
import BadgeReqR from "./pages/BadgeReqR/BadgeReqR"
import UpdateRequest from "./pages/BadgeReqUpdate/BadgeRequpdate";
import Eventsenroll from "./pages/events/EnrolForEvents";
import AboutUs from "./pages/UsAbout/AboutUsPage";
import Progress from "./pages/ProgressCard/ProgressPage";
import SPLogin from "./pages/SPLogin/LoginPage";
//Supun additional (end)

//Sadeeka additional (start)
import Scoutmaster from "./pages/ScoutMaster/Scoutmaster";
import ScoutmasterAS from "./pages/ScoutMaster/ScoutmasterAS";
import SMBadgeReq from "./pages/ScoutMaster/SMBadgeReq";
import ScoutmasterEP from "./pages/ScoutMaster/ScoutmasterEP";
import ScoutmasterMP from "./pages/ScoutMaster/ScoutmasterMP";
import SMPV from "./pages/ScoutMaster/SMPV";
import ScoutList from "./pages/ScoutMaster/ScoutList";
import ScoutmasterT from "./pages/ScoutMaster/ScoutmasterT";
import Update from "./pages/ScoutMaster/Update";
//Sadeeka additional (end)

function App() {
  return (

      <Routes>
        
        <Route path="/Dash" element={<Dash />} />
        <Route path="/" element={<Login/>}/>

        
        <Route path="/Addbe" element={<Addbe/>}/>
        <Route path="/Viewbe" element={<Viewbe/>}/>
        <Route path="/UpdateUser" element={<UpdateUser/>}/>
        <Route path="/CalendarPage" element={<CalendarPage/>}/>
        <Route path="/AddSM" element={<CreateSM/>}/>

        <Route path="/badgeExaminerRB" element={<BadgeExaminerRB/>}/>
        <Route path="/badgeExaminerTT" element={<BadgeExaminerTT/>}/>
        <Route path="/badgeSecretaryBO" element={<BadgeSecretaryBO/>}/>
        <Route path="/BadgeExaminerBIR/:id" element = {<BadgeExaminerBIR/>}/>
        <Route path="/BadgeExaminerBOU/:id" element ={<BadgeExaminerBOU/>}/>
        <Route path="/badgeSecretaryUBO/:id" element ={<BadgeSecretaryUBO/>}/>

        <Route path="/Home" element={<Home/>}/>
        <Route path="/AddEvent" element={<AddEvent/>}/>
        <Route path="/ViewEvent" element={<ViewEvent/>}/>
        <Route path="/BudgetCalculator" element={<Calculation/>}/>    
        <Route path="/ViewEvent/UpdateEvent/:id" element={< UpdateEvent/>}/>

        <Route path = "/Inventorydash" element = {<Inventorydash/>}/>
        <Route path = "/supplierdash" element = {<Supplierdash/>}/>
        <Route path = "/addsupplier" element = {<Addsupplier/>}/>
        <Route path = "/addproduct" element = {<Addproduct/>}/>
        <Route path = "/updateproduct/:id" element = {<Updateproduct/>}/>
        <Route path = "/supplierdash/updatesupplier/:id" element = {<Updatesupplier/>}/>


        <Route path = "/ScoutHome" element = {<ScoutHome/>}/>
        <Route path = "/Request" element = {<BadgeReq/>}/>
        <Route path = "/Profile" element = {<ScoutProf/>}/>
        <Route path = "/FindBExaminer" element = {<FindExaminer/>}/>
        <Route path = "/badgeRequestTable" element = {<BadgeReqR/>}/>
        <Route path = "/UpdateRequest/:id" element = {<UpdateRequest/>}/>
        <Route path = "/enrollevents" element = {<Eventsenroll/>}/>
        <Route path = "/login" element = {<SPLogin/>}/>
        <Route path = "/AboutUs" element = {<AboutUs/>}/>
        <Route path = "/ProgressCard" element = {<Progress/>}/>

        <Route path="/ScoutMaster" element={<Scoutmaster/>}/>
        <Route path="/ScoutmasterAS" element={<ScoutmasterAS/>}/>
        <Route path="/SMBadgeReq" element={<SMBadgeReq/>}/>
        <Route path="/ScoutMasterEP" element={<ScoutmasterEP/>}/>
        <Route path="/ScoutMasterMP" element={<ScoutmasterMP/>}/>
        <Route path="/SMPV" element={<SMPV/>}/>
        <Route path="/ScoutList" element={<ScoutList/>}/>
        <Route path="/ScoutMasterT" element={<ScoutmasterT/>}/>
        <Route path="/update/:id" element={<Update/>}/>

      </Routes>

  )
  }

export default App;
