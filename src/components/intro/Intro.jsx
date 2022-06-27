import React from 'react'
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect';



export default function Intro() {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed:40,
  //     strings: ["Frontend", "Backend", "Project Manager"],
  //   });
  // }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Berlia.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Neha Berlia</h1>
          <h3> Full Stack Web Developer</h3> 
         <span>
         <Typewriter
  options={{
    strings: ['Frontend', 'Backend', 'Project Manager'],
    autoStart: true,
    loop: true,
  }}
/></span> 
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}