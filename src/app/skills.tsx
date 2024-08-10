"use client";
import React, { useState } from "react";
import { Reveal } from "react-awesome-reveal";
import { Name } from "./home";
import { others } from "./home";
import { FaReact, FaHtml5, FaJs, FaCss3 } from "react-icons/fa";
import Circle from "../../components/Circles";

const containerStyle = {};
const list1 = [<FaHtml5 />, <FaJs />, <FaReact />, <FaCss3 />];
const Skills = () => {
  return (
    <main className="">
      <div style={{ height: "100dvh" }} className="container ">
        <Reveal keyframes={Name} delay={300}>
          <div className="circle  group hover:shadow-[0_0px_60px] hover:shadow-rose-500">
            <div className="group-hover:hidden">Devolopment </div>
            <div className="hidden group-hover:block -translate-x-9 -translate-y-9">
              <Circle list={list1} />
            </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name} delay={250}>
          <div className="circle group hover:shadow-[0_0px_60px] hover:shadow-emerald-600 ">
            <div className="group-hover:hidden">Programming Languages </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name} delay={300}>
          <div className="circle group hover:shadow-[0_0px_60px] hover:shadow-sky-600">
            <div className="group-hover:hidden">Database </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name}>
          <div className="circle group hover:shadow-[0_0px_60px] hover:shadow-fuchsia-600">
            <div className="group-hover:hidden">Designing </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default Skills;
