"use client";
import React, { useState } from "react";
import { Reveal } from "react-awesome-reveal";
import { Name } from "./home";
import { others } from "./home";
import { FaReact, FaHtml5, FaJs, FaCss3, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import python from "../../public/python-5.svg";
import C from "../../public/c-1.svg";
import CPP from "../../public/cpp.svg";
import Java from "../../public/java-14.svg";
import Matlab from "../../public/matlab.svg";
import Circle from "../../components/Circles";
import { SiMysql } from "react-icons/si";
import Mongodb from "../../public/mongodb-icon-1.svg";
import Image from "next/image";
import Firebase from "../../public/firebase-1.svg";
import Postgres from "../../public/postgresql.svg";
import Next from "../../public/next-js.svg";
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
  <Image
    key={"Next"}
    priority
    src={Next}
    height={48}
    width={48}
    alt="Next"
    className="w-12 h-12 p-0 bg-contain bg-white rounded-full border-2 shadow-[#FFD444] shadow-[0_0px_40px] hover:size-14"
  />,
];
const list2 = [
  <Image
    key={"Python"}
    priority
    src={python}
    height={48}
    width={48}
    alt="Python"
    className="w-12 h-12 p-2 rounded-full border-2 shadow-[#FFD444] shadow-[0_0px_40px] hover:size-14"
  />,
  <Image
    alt="C"
    key={"C"}
    priority
    src={C}
    height={48}
    width={48}
    className="w-12 h-12 p-2 rounded-full border-2 shadow-[#0BB5D5] shadow-[0_0px_40px] hover:size-14"
  />,
  <Image
    key="CPP"
    alt="CPP"
    priority
    src={CPP}
    height={48}
    width={48}
    className="w-12 h-12 p-2 rounded-full border-2 shadow-[#FFFFFF] shadow-[0_0px_40px] hover:size-14"
  />,
  <Image
    key="Java"
    alt="Java"
    priority
    src={Java}
    height={48}
    width={48}
    className="w-12 h-12 p-2 rounded-full border-2 shadow-[#5382A1] shadow-[0_0px_40px] hover:size-14"
  />,

  <Image
    key="Matlab"
    alt="Matlab"
    priority
    src={Matlab}
    height={48}
    width={48}
    className="w-12 h-12 p-2 rounded-full border-2 shadow-[#F1703F] shadow-[0_0px_40px] hover:size-14"
  />,
];
const list3 = [
  <SiMysql
    key="MYSQL"
    className=" h-14 w-14  p-2 rounded-full border-2 text-[#0BB5D5] shadow-[0_0px_25px] hover:size-16"
  />,
  <Image
    key="MongoDB"
    alt="MongoDB"
    priority
    src={Mongodb}
    height={48}
    width={48}
    className="w-14 h-14 p-2   rounded-full border-2 shadow-[#599636] shadow-[0_0px_40px] hover:size-16"
  />,
  <Image
    key="Firebase"
    alt="Firebase"
    priority
    src={Firebase}
    height={48}
    width={48}
    className="w-14 h-14 p-2   rounded-full border-2 shadow-[#FCCA3F] shadow-[0_0px_40px] hover:size-16"
  />,
  <Image
    key="PostgreSQL"
    alt="PostgreSQL"
    priority
    src={Postgres}
    height={48}
    width={48}
    className="w-14 h-14 p-2   rounded-full border-2 shadow-[#5382A1] shadow-[0_0px_40px] hover:size-16"
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
          <div className="p-10 m-10 circle  group hover:shadow-[0_0px_40px] hover:shadow-rose-500">
            <div className="group-hover:hidden">Devolopment </div>
            <div className="hidden group-hover:block -translate-x-10 -translate-y-9">
              <Circle list={list1} />
            </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name} delay={250}>
          <div className="circle p-10 m-10 group hover:shadow-[0_0px_40px] hover:shadow-emerald-600 ">
            <div className="group-hover:hidden">Programming Languages </div>
            <div className="hidden group-hover:block -translate-x-10 -translate-y-9">
              <Circle list={list2} />
            </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name} delay={300}>
          <div className="circle group p-10 m-10 hover:shadow-[0_0px_40px] hover:shadow-sky-600">
            <div className="group-hover:hidden">Database </div>
            <div className="hidden group-hover:block -translate-x-10 -translate-y-9">
              <Circle list={list3} />
            </div>
          </div>
        </Reveal>
        <Reveal keyframes={Name}>
          <div className="circle group p-10 m-10 hover:shadow-[0_0px_40px] hover:shadow-fuchsia-600">
            <div className="group-hover:hidden">Designing </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default Skills;
