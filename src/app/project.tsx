import React from "react";
import Circle from "../../components/Circles";
const list1 = ["HTML", "CSS", "JS", "ReactJS", "NodeJS", "Tailwindcss"];
const contact = () => {
  return (
    <main className="">
      <div
        style={{
          height: "100dvh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        className=""
      >
        <Circle list={list1} />
        This is contact section
      </div>
    </main>
  );
};

export default contact;
