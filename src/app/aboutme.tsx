"use client";
import React, { useEffect, useRef } from "react";
import { Name } from "./home";
import { others } from "./home";
import { Reveal } from "react-awesome-reveal";
const Me = () => {
  return (
    <div
      style={{
        height: "max-content",
      }}
      className=""
    >
      <h1 id="" className="about">
        ABOUT ME
      </h1>
      <Reveal keyframes={others}>
        <p id="hey-guys" className="center align-middle p-10">
          Hey guys, My name is <span className="font-bold">Abinav N</span> and I
          am a Second-year{" "}
          <span className="font-bold">Electronics and Computer Science</span>{" "}
          student at <span className="font-bold">VIT, Chennai</span>.<br />I am
          a tech geek at heart, always excited about the latest gadgets and
          innovations.
        </p>
      </Reveal>
      <div className="education flex align-middle self-center p-10">
        <ul className="flex flex-col self-center items-center justify-around">
          <Reveal keyframes={others}>
            <li>
              <div className="secondary box ">
                <p className="name">Secondary School</p>
                <p className="place">Chinmaya Vidyalaya</p>
                <p className="mx-3 my-2 text-neutral-400 text-lg font-bold">
                  Class 10: 95.4%
                </p>
              </div>
            </li>
          </Reveal>
          <Reveal keyframes={others}>
            <li>
              <div className="senior box">
                <p className="name">Higher Secondary School</p>
                <p className="place">Chinmaya Vidyalaya</p>
                <p className="mx-3 my-2 text-neutral-400 text-lg font-bold">
                  Class 12: 95.16%
                </p>
              </div>
            </li>
          </Reveal>
          <Reveal keyframes={others}>
            <li>
              <div className="vit box">
                <p className="name">Bachelors Degree</p>
                <p className="place">
                  Vellore Institute Of Technology, Chennai
                </p>
                <p className="mx-3 my-2 text-neutral-400 text-lg font-bold">
                  CGPA: 9.00
                </p>
              </div>
            </li>
          </Reveal>
        </ul>
      </div>
    </div>
  );
};

export default Me;
