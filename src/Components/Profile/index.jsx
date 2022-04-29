import React from 'react';
import BG from './bg.jpg';
import level from './level.png';
import badge from './badge.png';
import tree1 from './Trees/tree1.png';
import tree2 from './Trees/tree2.png';

let trees = [tree1, tree2];

function Profile() {
  return (
    <div className='h-full w-full  flex flex-col flex-grow '>
      <div
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        className='w-full h-32 bg-gray-200'
      ></div>
      <div className='w-full   flex flex-col'>
        <div className='rounded-full w-20 h-20  -mt-10 mx-7 flex-shrink-0'></div>
        <ul className='list-none p-4 px-5'>
          <li>Hello</li>
          <li>1321323</li>
          <li>fdsg</li>
          <li>4yr</li>
        </ul>
      </div>
      <div
        style={{ backgroundImage: `url(${level})`, backgroundSize: 'contain' }}
        className='w-full h-64 relative'
      >
        <div className='w-full flex flex-grow absolute bottom-16 '>
          {new Array(8).fill(0).map(() => {
            return (
              <img
                className='w-12'
                src={trees[(Math.random() * trees.length) | 0]}
              />
            );
          })}
        </div>
      </div>
      <div className='w-full py-5'>
        <span className='text-3xl p-4 mt-10'>Achievements</span>
        <div className='flex flex-wrap gap-4 px-4 mt-5'>
          {new Array(10).fill(0).map(() => {
            return <img className='w-12' src={badge} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
