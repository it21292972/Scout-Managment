import "./Adventure.scss";
import knot from "../../image/knot.jpg";
import Cub from "../../image/Cub.jpg";
import Junior from "../../image/Junior.jpg";
import Senior from "../../image/Senior.jpg";




export default function Adventure() {
    return (
<div className="AdventurePart">
<img src={knot} className='knot' alt='knot'/>
    <div className="Header">
     <h1>Join The Adventure</h1>
    </div>
    <div className="images">
    <img src={Cub} className='Cub' alt='Cub'/>
    <img src={Junior} className='Junior' alt='Junior'/>
    <img src={Senior} className='Senior' alt='Senior'/>
    </div>
</div>
    );
}