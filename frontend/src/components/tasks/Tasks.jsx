import "./Tasks.scss";
import findbe from "../../image/findbe.jpg";
import badgelist from "../../image/badgelist.png"
import brequest from "../../image/brequest.png";
import progress from "../../image/progress.png";
import syllabus from "../../image/syllabus.jpg";
import Friendship from "../../image/Friendship.png";
import {Link} from "react-router-dom"


export default function Tasks() {
  return (
    <div className="taskset">
    <div className="Tasksline1">
     <div className="Tasks1">
      <img className="postImg1" src={findbe}  alt=""/><br></br>      
        <span className="postTitle1">     
        <Link to="/FindBExaminer"  >  Find a Badge Examiner   </Link> 
        </span>       
        </div>
        
     <div className="Tasks1">
      <img className="postImg1" src={progress}  alt=""/><br></br>     
        <span className="postTitle1">     
        <Link to="/ProgressCard"  >Progress Card    </Link> 
        </span>       
        </div>
       
     <div className="Tasks1">
     
      <img className="postImg3" src={brequest}  alt=""/><br></br>  
        
        <span className="postTitle1">     
        <Link to="/Request"  >    Create a Badge Request </Link> 
            
        </span>       
        </div>
        
        </div>
    
   
      </div>
  );
}