import React from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Widget = ({type}) =>{
    //let data;
    //switch(type){
       // case"user":
       // data={
          //  title:"Active Scouts",
           // link:"See all Scouts",
          //  counter:"100",

      /*  };
        break;
        case "troops":
            data={ 
                title:"Active Troops",
                link:"See all Troops",
                counter:"50",
            }
        default:
            break;
    }*/


    return(
        <div className="widget" > 
            <div className="left">
                <span className="title">Active Scouts</span>
                <span className="counter">100</span>
                <span className="link">See all scouts</span>
            </div>
            <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpIcon/>
                    20%
                </div>
                <PersonOutlineIcon className="icon"/>
            </div>
        </div>
    )
}
export default Widget