"use client";
import React from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Web Devoloper','Student','UI/UX Designer','Competitive Coder','Volunteer'],
      typeSpeed: 90,
      backSpeed:200,
      backDelay:1000,
      showCursor: false,
      loop:true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main className='ov -inset-10 '>
      <div style={{ height: '100dvh',display:"flex", justifyContent:"center", alignContent:"center",alignItems:"center"}} className='hidden'>
          <p id="name">
            <span id="a">A</span>binav <br />Nagarajan
          </p>
          <p id="details" className='typed' ref={el}></p>
          <a id='link'href="/Abinav N Resume.pdf.pdf" download><button id='but'>Download CV</button></a>
        </div>
    </main>
  )
}

export default Home
