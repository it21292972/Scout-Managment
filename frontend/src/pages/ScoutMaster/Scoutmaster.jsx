import React from 'react'
import NavbarScoutMaster from '../../components/NavbarScoutMaster'

import Footer from '../../components/footer'

import image from "../../image/scout2.jpg";

const Scoutmaster = () => {
  return (
    <div className='scoutMaster'>
       <div><NavbarScoutMaster/></div>
       <div>
       <div style={{ 
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  width:'1500px',
  height:'2000px'
  
}}>

</div>
    </div>
    <div><Footer/></div>
      
    </div>
  )
}

export default Scoutmaster;
