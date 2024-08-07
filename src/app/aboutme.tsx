import React from 'react';
import ScrollContainer from '../../components/ScrollContainer';
const Me = () => {
  return (
    <div style={{height: '151.01dvh',display:"flex",flexDirection:'column', justifyContent:"center", alignContent:"center",alignItems:"center"}} className="hidden">
    <div style={{ height: '150dvh',display:"contents"}} className=''>
        <h1 id="" className='about'>ABOUT ME</h1>
        <p id='hey-guys' className=''>Hey guys,
<<<<<<< HEAD
My name is <span className=' font-bold'>Abinav N</span> and I am a Second-year <span className='font-bold'>Electronics and Computer Science </span>student at <span className='font-bold'>VIT,Chennai</span>.<br/>
I am a tech geeks at heart, always excited about the latest gadgets and innovations.
=======
My name is <span className=' font-bold'>Abinav N</span> and I am a Second-year <span className='font-bold'>Electronics and Computer Science </span>student at <span className='font-bold'>VIT Chennai</span>.<br/>
I am intrested in working as a Front end Devoloper and if you need a guy to make a website for you,
you have come to the right place
>>>>>>> 5c1708a1f22e993d99d87dfc6b8c2c37e240df07
        </p>
        <div className="education" style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
          <ul className='m-10 p-10 ' style={{display:'flex', flexDirection:"column"}}>
            <li>
              <div className="secondary box">
                <p className='name'>Secondary School</p>
                <p className='place'>Chinmaya Vidyalaya</p>
                <p className='mx-3 my-2 text-neutral-400 text-lg font-bold'>Class 10: 95.4%
                </p>
              </div>
            </li>
            <li>
              <div className="senior box">
                <p className='name'>Higher Secondary School</p>
                <p className='place'>Chinmaya Vidhyalaya </p>
                <p className='mx-3 my-2 text-neutral-400 text-lg font-bold'>Class 12: 95.16%
                </p>
              </div>
            </li>
            <li>
              <div className="vit box">
<<<<<<< HEAD
                <p className='name text-xl'>Bachelors Degree</p>
=======
                <p className='name'>Bachelors Degree</p>
>>>>>>> 5c1708a1f22e993d99d87dfc6b8c2c37e240df07
                <p className='place'>Vellore Institute Of Technology,Chennai</p>
                <p className='mx-3 my-2 text-neutral-400 text-lg font-bold'>CGPA: 9.00
                </p>
              </div>
            </li>
          </ul>
        </div>

    </div>
    </div>
  )
}

export default Me
