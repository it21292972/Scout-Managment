import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://c.files.bbci.co.uk/9071/production/_92377963_f5029662-dc44-47f0-903e-44134e8a9acd.jpg",
    "https://media.cnn.com/api/v1/images/stellar/prod/120719112422-graddick-boy-scouts.jpg?q=x_0,y_202,h_2187,w_3887,c_crop/h_720,w_1280/f_webp",
    "https://static.thereisadayforthat.com/images/1280x853c/boy-scouts.jpg", 
];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        
        <img src={data[0]} alt="" />
        <h1 className="image-texth1">Mission</h1><br></br>
        <p1 className="image-text1">“The Mission of Scouting is to contribute to the education of young people, through a value system based on the Scout Promise and Law,  </p1> <br></br>
        <p2 className="image-text2">to help build a better world where people are self-fulfilled as individuals and play a constructive role in society.”</p2><br></br>
        <p3 className="image-text3">"The Mission was adopted at the 35th World Scout Conference in Durban, South Africa in 1999. Illustrating both the local and global </p3> <br></br>
        <p4 className="image-text4"> impact of Scouting,the Mission of Scouting has been captured in World Scouting’s brand as “Creating a Better World”.</p4>
        <img src={data[1]} alt="" />
        <h1 className="image-texth2">Scout Promise</h1><br></br>
        <p5 className="image-text5">On my honour I promise to do my best</p5>
        <p5 className="image-text6">to do my duty to my religion and my country,</p5>
        <p5 className="image-text7">to help other people at all times</p5>
        <p5 className="image-text8">and to obey the Scout law.</p5>
        <img src={data[2]} alt="" />
        <h1 className="image-texth3">Vision</h1><br></br>
        <p6 className="image-text9">“By 2023 Scouting will be the world’s leading educational youth movement, enabling 100 million young people to be active</p6><br></br>
        <p6 className="image-text10">citizens creating positive change in their communities and in the world based on shared values.”</p6><br></br>
        <p6 className="image-text11">The Vision for Scouting, Vision 2023, was adopted at the 40th World Scout Conference in Ljubljana, Slovenia in 2014.</p6>


       

      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;


