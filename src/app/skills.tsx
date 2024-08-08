"use client";
import React from "react";
const circleStyle = {
  width: "275px",
  height: "275px",
  borderRadius: "50%",
  border: "2px solid white",
  margin: "10px",
};

const containerStyle = {};

const Skills = () => {
  return (
    <main className="">
      <div style={{ height: "100dvh" }} className="container">
        <div style={circleStyle} className="circle">
          <div>Devolopment </div>
        </div>
        <div style={circleStyle} className="circle">
          <div>Programming Languages</div>
        </div>
        <div style={circleStyle} className="circle">
          <div>Database</div>
        </div>
        <div style={circleStyle} className="circle">
          <div>Graphic Designing</div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
