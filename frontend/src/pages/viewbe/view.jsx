import React from "react";
import Header from "../../components/navbar/Header"
import "./view.scss"
import Dtable from "../../components/DataTable/Datatable";
const Viewbe = () => {
    return(
        <div className="viewpage">
            <Header/>
            <div className ="listContainer">
                <Dtable/>
            </div>
        </div>

    )
};
export default Viewbe
