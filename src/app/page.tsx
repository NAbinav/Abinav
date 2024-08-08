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
  const [menu, setmenu] = useState(false);
  const [home, sethome] = useState(false);
  return (
    <section
      style={{
        height: "100dvh",
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <main id={menu ? "show-menu" : "hide-menu"}>
        <Intro></Intro>
      </main>
      <div id="menu">
        {home ? (
          <FontAwesomeIcon
            icon={faX}
            className="sm:bg-grey-200 p-1 sm:p-2 md:bg-grey-400 "
            onClick={() => {
              setmenu(!menu);
              sethome(!home);
              window.scrollTo({
                top: 0,
              });
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className="sm:bg-grey-200 p-1 sm:p-2 md:bg-grey-400 "
            onClick={() => {
              setmenu(!menu);
              sethome(!home);
              window.scrollTo({
                top: 0,
              });
            }}
          />
        )}
      </div>

      <div
        style={{
          height: "100dvh",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        id="home"
      >
        <Home />
      </div>
      <div
        style={{
          height: "150dvh",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        id="about"
      >
        <Me />
      </div>
      <div
        style={{
          height: "100dvh",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        id="skills"
      >
        <Skills />
      </div>
      <div
        style={{
          height: "100dvh",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        id="about"
      >
        <Project />
      </div>
    </section>
  );
};

export default Page;
