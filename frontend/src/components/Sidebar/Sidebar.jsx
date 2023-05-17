import "./Sidebar.scss"
import avatar from "../../image/login avatar.png"

export default function Sidebar(){
    return(
<div className="Sidebar">
    <div className="SidebarWrapper">
        <div className="SidebarProfile">
            <div className="SidebarTitle"><h3>Profile</h3></div>
            <div className="ProfilePic"><img src={avatar} alt="profile pic" class="center" height={80} width={80} ></img></div>
            <div className="details">
                <div className="detailItem">
                    <span className="itemKey"> Username:</span>
                    <span className="itemValue">Shashi_D</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey"> Name:</span>
                    <span className="itemValue">Shashi Dharmasena</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey"> Email:</span>
                    <span className="itemValue"> shashi.dharmasena@gmail.com</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey"> Warrant ID:</span>
                    <span className="itemValue">001</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey"> Phone: </span>
                    <span className="itemValue">0771234567</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey"> Address:</span>
                    <span className="itemValue">01,bayawecca para, anda yata, colombo</span>
                </div>
            </div>
            <div className="button">
            <button link to="/UpdateUser">Edit</button>
            </div>
            
        </div>
    </div>
</div>
    )
}
