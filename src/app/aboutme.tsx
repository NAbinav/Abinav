import React, { useEffect, useRef } from 'react';
import { useInView } from "framer-motion"


const Me = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])
  
  return (
    <div style={{ height: '151.01dvh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} className="hidden">
      <div style={{ height: '150dvh', display: 'contents' }} className=''>
        <h1 id="" className='about'>ABOUT ME</h1>
        <p id='hey-guys' className='' ref={ref} style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
          Hey guys, My name is <span className='font-bold'>Abinav N</span> and I am a Second-year <span className='font-bold'>Electronics and Computer Science</span> student at <span className='font-bold' style={{opacity: isInView ? 1 : 0}} ref={ref}>VIT, Chennai</span>.<br />
          I am a tech geek at heart, always excited about the latest gadgets and innovations.
        </p>
        <div className="education" style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <ul className='m-10 p-10' style={{ display: 'flex', flexDirection: 'column' }}>
            <li>
              <div className="secondary box " ref={ref} style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
                <p className='name'>Secondary School</p>
                <p className='place'>Chinmaya Vidyalaya</p>
                <p className='mx-3 my-2 text-neutral-400 text-lg font-bold'>Class 10: 95.4%</p>
              </div>
            </li>
            <li>
              <div className="senior box" ref={ref} style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
                <p className='name'>Higher Secondary School</p>
                <p className='place'>Chinmaya Vidyalaya</p>
                <p className='mx-3 my-2 text-neutral-400 text-lg font-bold'>Class 12: 95.16%</p>
              </div>
            </li>
            <li>
              <div className="vit box" ref={ref} style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
                <p className='name'>Bachelors Degree</p>
                <p className='place'>Vellore Institute Of Technology, Chennai</p>
                <p className='mx-3 my-2 text-neutral-400 text-lg font-bold'>CGPA: 9.00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Me;
