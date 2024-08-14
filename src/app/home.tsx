"use client";
import React from "react";
import Typed from "typed.js";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
export const Name = keyframes`
  to {
    opacity: 1;
    transform: translate(0, 0);
  }

  from {
    opacity: 0;
    transform: translate(-100px, 0);
    
  }
`;
export const others = keyframes`
  to {
    opacity: 1;
  }

  from {
    opacity: 0;
  }
`;

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Web Devoloper",
        "Student",
        "UI/UX Designer",
        "Competitive Coder",
        "Volunteer",
      ],
      typeSpeed: 100,
      backSpeed: 90,
      backDelay: 1000,
      showCursor: false,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main
      className="ov "
      style={{
        height: "100dvh",
        width: "100dvw",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ height: "", display: "flex" }} className=" flex flex-col">
        <div className="">
          <p id="name">
            <span id="a">A</span>binav <br />
            Nagarajan
          </p>
        </div>
        <div className="flex flex-col gap-12 det">
          <p id="details" className="typed" ref={el}></p>
          <Reveal keyframes={others}>
            <a
              id="link"
              href="/Abinav N Resume.pdf.pdf"
              className="-translate-x-10"
              download
            >
              <button id="but">Download CV</button>
            </a>
          </Reveal>
        </div>
      </div>
    </main>
  );
};

export default Home;
