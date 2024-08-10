import React from 'react';
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
const Circle = ({ list}) => {
    const Name= keyframes`
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  
    from {
      opacity: 0;
      transform: translate(100, 0);
      
    }
  `;
  return (
    <div className="circle-container">
      {list.map((circle, index) => (
        <Reveal  key={index} keyframes={keyframes`
            to {
              opacity: 1;
              transform: translate(0, 0);
            }
          
            from {
              opacity: 0;
              transform:rotate(${(360 / list.length) * (list.length-index)}deg);
              rotate(-${(360 / list.length) * index}deg)
              
            }
          `} delay={index*100}>
          <div
            className="ncircle"
            style={{
              transform: `rotate(${(360 / list.length) * index}deg) translate(100px) rotate(-${(360 / list.length) * index}deg)`,
            }}
          >
            {circle}
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Circle;
