"use client";
import { useEffect } from "react";
import React from "react";
function Intro() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElement = document.querySelectorAll(".hidden");
    hiddenElement.forEach((el) => observer.observe(el));
  });
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const { currentTarget: target } = e;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    const cards = document.querySelectorAll<HTMLElement>(".card");
    for (const card of cards) {
      card.onmousemove = (e: any) => handleMouseMove(e);
    }

    // Cleanup function to remove event listeners
    return () => {
      for (const card of cards) {
        card.onmousemove = null;
      }
    };
  }, []);

  return (
    <main
      style={{
        minHeight: "100dvh",
        maxHeight: "max-content",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
      className="firstpage"
    >
      <div
        id="cards"
        className="center align-middle justify-center items-center"
      >
        <div
          className="card"
          onClick={() => {
            window.scrollBy({
              top: 1 * window.innerHeight,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <div className="card-content">
            <p>HOME</p>
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            window.scrollBy({
              top: 2 * window.innerHeight,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <div className="card-content">
            <p>ABOUT</p>
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            window.scrollBy({
              top: 3.25 * window.innerHeight,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <div className="card-content">
            <p>SKILLS</p>
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            window.scrollBy({
              top: 4.5 * window.innerHeight,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <div className="card-content">
            <p>PROJECT</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Intro;
