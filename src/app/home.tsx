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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Web Devoloper",
        "Student",
        "UI/UX Designer",
        "Competitive Coder",
        "Volunteer",
      ],
      typeSpeed: 90,
      backSpeed: 200,
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
    <main className="ov ">
      <div style={{ height: "100dvh", display: "flex" }} className="hidden">
        <Reveal keyframes={Name}>
          <p id="name">
            <span id="a">A</span>binav <br />
            Nagarajan
          </p>
        </Reveal>
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
