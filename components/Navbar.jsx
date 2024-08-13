"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHouse,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";
import Intro from "@/app/intro";
const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const [home, sethome] = useState(false);
  return (
    <>
      <div className="navbar block sm:hidden">
        <a href="#home">
          <span className="flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faHouse} size="xs" />
            Home
          </span>
        </a>
        <a href="#about">
          <span className="flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faAddressCard} size="xs" />
            About
          </span>
        </a>
        <a href="#skills">
          <span className="flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faBolt} size="xs" />
            Skills
          </span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
