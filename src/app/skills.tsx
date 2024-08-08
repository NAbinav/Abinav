"use client";
import React from "react";
import { Reveal } from "react-awesome-reveal";
import { Name } from "./home";
import { others } from "./home";

const containerStyle = {};

const Skills = () => {
  let a = "275px";
  const circleStyle = {
    width: a,
    height: a,
    borderRadius: "50%",
    border: "2px solid white",
    margin: "10px",
  };
  return (
    <main className="">
      <div style={{ height: "100dvh" }} className="container ">
        <Reveal keyframes={Name} delay={300}>
          <div style={circleStyle} className="circle hover:w-80 h-80">
            <div>Devolopment </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name} delay={250}>
          <div style={circleStyle} className="circle">
            <div>Programming Languages </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name} delay={300}>
          <div style={circleStyle} className="circle">
            <div>Database </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name}>
          <div style={circleStyle} className="circle">
            <div>Designing </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default Skills;
