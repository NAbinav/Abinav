"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faHighlighter,
  faHouse,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Intro from "./intro";
import About from "./aboutme";
import Home from "./home";
import Skills from "./skills";
import Project from "./project";
import Me from "./aboutme";
import { useEffect, useState } from "react";

const Page = () => {
  return (
    <section
      style={{
        height: "100dvh",
        width: "100%",
      }}
      id="page"
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div id="" className=" introres">
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
