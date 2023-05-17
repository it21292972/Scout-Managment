import React, { useEffect } from "react";
import { useState } from "react";
import "./badgeIssueOrderUpdate.scss";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";

const BadgeIssueOrderUpdate = () => {
    const [emptyFields, setEmptyFields] = useState([]);
    const{ id }=useParams();
    const[error, setError] = useState(null);
    const[values, setValues] = useState({
        IssueId:"",
        scoutId:"",
        scoutName:"",
        badgeName:"",
        remark:"", 
        passedDate:"",

    });
    useEffect(()=>{
        axios
        .get(`/badgeIssueOrder/${id}`)
        .then((res)=>{
            setValues({
                ...values,
                IssueId:res.data.IssueId,
                scoutId:res.data.scoutId,
                scoutName:res.data.scoutName,
                badgeName:res.data.badgeName,
                remark:res.data.remark,
                passedDate:res.data.passedDate,

            });
        })
        .catch((err)=> console.log(err));
    },[])

    const navigate = useNavigate();
    const handleUpdate  = (e) => {
        e.preventDefault();
        const emptyFields = [];
        if (!values.scoutId) emptyFields.push('Scout ID');
        if (!values.scoutName) emptyFields.push('Scout Name');
        if (!values.badgeName) emptyFields.push('Badge Name');
        if (!values.remark) emptyFields.push('Remarks');
        if (!values.passedDate) emptyFields.push('Passed Date');
        setEmptyFields(emptyFields);
        if (emptyFields.length > 0) return;
        axios
        .put(`/badgeIssueOrder/${id}`,values)
        .then((res)=>{
            console.log(res);
            Swal.fire("Done!, Remark updated successfully")
            navigate("/badgeSecretaryBO")
        })
        .catch((err) => console.log(err))
    }


//   const [IssueId, setIssueId] = useState("");
//   const [scoutId, setScoutId] = useState("");
//   const [scoutName, setScoutName] = useState("");
//   const [badgeName, setBadgeName] = useState("");
//   const [remark, setRemark] = useState("");
//   const [passedDate, setPassedDate] = useState("");
//   const [error, setError] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);



  
  return (
    <form className="addIssue" onSubmit={handleUpdate}>
      <label>Issue Id :</label>
      <input
        type="text"
        value={values.IssueId
        }
        onChange={(e) => setValues({...values,IssueId:e.target.value})}
        required
        
      />
            


      <label>Scout ID :</label>
      <input
        type="text"
        value={values.scoutId}
        onChange={(e) => setValues({...values,scoutId:e.target.value})}
        required
      />


      <label>Scout Name :</label>
      <input
        type="text"
        value={values.scoutName}
        onChange={(e) => setValues({...values,scoutName:e.target.value})}
        required
      />
    

    <label>Badge Name :</label>
      <input
        type="text"
        value={values.badgeName}
        onChange={(e) => setValues({...values,badgeName:e.target.value})}
        required

      />

      <label>Passed Date :</label>
      <input
        type="date"
        min={new Date().toISOString().slice(0, 10)}
        value={values.passedDate}
        onChange={(e) => setValues({...values,passedDate:e.target.value})}
        required

      />




      <label>Remarks :</label>
      <input
        type="text"
        className="remark"
        value={values.remark}
        onChange={(e) => setValues({...values,remarke:e.target.value})}
        required

      />


      <button type="submit">Save</button>
      <p>{error && <p className="error">{error}</p>}</p>
    </form>
  );
};

export default BadgeIssueOrderUpdate;

