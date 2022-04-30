import React from 'react';
import pub from './pub.svg';
import vector from './Vector.png';
import roundProgressBar from './round-progress-bar1.png';
import { ReactComponent as Addbtn } from './addbtn.svg';
import { useState } from 'react';

function Home() {
   const [state,setState] = useState(false);
  return (
    <div
      style={{ background: 'linear-gradient(#fff,#fdfdfd)' }}
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
      <Addbtn className='fixed z-20 bottom-28 right-6 cursor-pointer' />
    </div>
  );
}

export default Home;
