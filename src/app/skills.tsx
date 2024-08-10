"use client";
import React, { useState } from "react";
import { Reveal } from "react-awesome-reveal";
import { Name } from "./home";
import { others } from "./home";

const containerStyle = {};

const Skills = () => {
  return (
    <main className="">
      <div style={{ height: "100dvh" }} className="container ">
        <Reveal keyframes={Name} delay={300}>
          <div className="circle hover:shadow-[0_0px_60px] hover:shadow-rose-500">
            <div>Devolopment </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name} delay={250}>
          <div className="circle hover:shadow-[0_0px_60px] hover:shadow-emerald-600 ">
            <div>Programming Languages </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name} delay={300}>
          <div className="circle hover:shadow-[0_0px_60px] hover:shadow-sky-600">
            <div>Database </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name}>
          <div className="circle hover:shadow-[0_0px_60px] hover:shadow-fuchsia-600">
            <div>Designing </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default Skills;
