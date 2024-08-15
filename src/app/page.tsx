"use client";

import React from "react";
import Intro from "./intro";
import Home from "./home";
import Skills from "./skills";
import Project from "./project";
import Me from "./aboutme";

const Page = () => {
  return (
    <section
      style={{
        height: "",
      }}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div id="" className=" h-screen introres">
        <Intro />
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <Me />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div>
        <Project />
      </div>
    </section>
  );
};

export default Page;
