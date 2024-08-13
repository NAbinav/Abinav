"use client";
import React, { useState } from "react";
import { Reveal } from "react-awesome-reveal";
import { Name } from "./home";
import { others } from "./home";
import { FaReact, FaHtml5, FaJs, FaCss3, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import Circle from "../../components/Circles";

const containerStyle = {};
const list1 = [
  <FaHtml5
    key="html5"
    className="h-12 w-12  p-2 rounded-full border-2 text-[#FF5225] shadow-[0_0px_25px] hover:size-14"
  />,
  <FaJs
    key="js"
    className=" h-12 w-12  p-2 rounded-full border-2 text-[#F7E025] shadow-[0_0px_25px] hover:size-14"
  />,
  <SiTailwindcss
    key="Tailwind"
    className=" h-12 w-12  p-2 rounded-full border-2 text-[#0BB5D5] shadow-[0_0px_25px] hover:size-14"
  />,
  <FaReact
    key="react"
    className=" h-12 w-12  p-2 rounded-full border-2 text-[#08D9FF] shadow-[0_0px_25px] hover:size-14"
  />,
  <FaCss3
    key="css3"
    className=" h-12 w-12  p-2 rounded-full border-2 text-[#2629e4] shadow-[0_0px_25px] hover:size-14"
  />,
  <FaNodeJs
    key="NodeJs"
    className=" h-12 w-12  p-2 rounded-full border-2 text-[#84BF08] shadow-[0_0px_25px] hover:size-14"
  />,
];

const Skills = () => {
  return (
    <main className="">
      <div
        style={{ height: "max-content" }}
        className="container overflow-auto "
      >
        <Reveal keyframes={Name} delay={300}>
          <div className="circle  group hover:shadow-[0_0px_40px] hover:shadow-rose-500">
            <div className="group-hover:hidden">Devolopment </div>
            <div className="hidden group-hover:block -translate-x-10 -translate-y-9">
              <Circle list={list1} />
            </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name} delay={250}>
          <div className="circle group hover:shadow-[0_0px_40px] hover:shadow-emerald-600 ">
            <div className="group-hover:hidden">Programming Languages </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name} delay={300}>
          <div className="circle group hover:shadow-[0_0px_40px] hover:shadow-sky-600">
            <div className="group-hover:hidden">Database </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name}>
          <div className="circle group hover:shadow-[0_0px_40px] hover:shadow-fuchsia-600">
            <div className="group-hover:hidden">Designing </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default Skills;
