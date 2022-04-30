import React from 'react';
import pub from './pub.svg';
import vector from './Vector.png';
import roundProgressBar from './round-progress-bar1.png';
import { ReactComponent as Addbtn } from './addbtn.svg';
import { ReactComponent as Form } from './form.svg';
import { useState } from 'react';

import styles from "./Home.module.css"

function Home() {
  const [state, setState] = useState(false);
  return (<>
    <div
      style={{ background: 'linear-gradient(#fff,#fdfdfd)', filter: state ? "blur(8px)" : "",
      pointerEvents: state ? "none" : "normal" }}
      className='h-full w-full flex flex-col flex-grow relative'
    >
      <div className='mt-14 px-5 text-2xl'>
        <h3 className='font-bold'>Hello Nithin</h3>
      </div>
      <div>
        <img
          src={roundProgressBar}
          // style={{ height: '757px' }}
          className='mx-auto mt-3'
        />
      </div>
      <h3 className='px-5 text-base font-medium'>Your activity today</h3>
      <div
        className='px-5 h-24 mx-3 flex items-center'
        style={{
          borderRadius: '5px',
          boxShadow: ' 0px 4px 41px rgba(0, 0, 0, 0.05)',
        }}
      >
        <img src={pub} alt='' />
        <h1 className='text-xl font-bold ml-5'>Used public transport</h1>
      </div>
      <div
        className='px-5 h-24 mx-3 flex items-center'
        style={{
          borderRadius: '5px',
          boxShadow: ' 0px 4px 41px rgba(0, 0, 0, 0.05)',
        }}
      >
        <img src={vector} alt='' />
        <h1 className='text-xl font-bold ml-5'>Turned off light</h1>
      </div>
      <div
        className='px-5 h-24 mx-3 flex items-center'
        style={{
          borderRadius: '5px',
          boxShadow: ' 0px 4px 41px rgba(0, 0, 0, 0.05)',
        }}
      >
        <img src={pub} alt='' />
        <h1 className='text-xl font-bold ml-5'>Reduce Food Leftovers</h1>
      </div>
      <Addbtn onClick={() => setState((state) => !state)} className={`fixed ${state ? "z-20" : "z-10"} bottom-28 right-6 cursor-pointer`} />
    </div>
    <Form className={`fixed z-20 ${styles.offset} ${state ? styles.crrct : " "}`} />
    <div className="fixed top-0 left-0 w-full h-32 z-50" onClick={() => setState((st) => !st)}>
    </div></>

  );
}

export default Home;
