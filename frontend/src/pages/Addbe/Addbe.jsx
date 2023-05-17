import React from "react";
import "./Addbe.scss"
import FormInput from "../../components/formInput/input";
import Header from '../../components/navbar/Header'
import AddBadgeExaminer from "../../components/AddBadgeExaminer/AddBadgeExaminer";
const Addbe = () => {
    return(
        <div>
        <><Header/>
        <div className="page">
            
            <div classname="Form">
                 
                    {/* <FormInput placeholder="Username" />
                    <FormInput placeholder="Password" />
                <button className="button">send</button> */}
                <AddBadgeExaminer/>
                </div>
            </div>
        </>
        </div>
    )
};

export default Addbe