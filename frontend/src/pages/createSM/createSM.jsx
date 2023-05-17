import React from "react";
import "./createSM.scss"
import Header from '../../components/navbar/Header'
import AddSM from "../../components/AddSM/AddSM";
const CreateSM = () => {
    return(
        <><Header/>
        <div className="page">
            
            <div classname="Form">
                  <form>
                <AddSM/>
                </form></div>
            </div>
        </>
    )
};

export default CreateSM