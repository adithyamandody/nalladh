import React from 'react';
import BG from './bg.jpg';
import level from './level.png';
import b1 from './Badges/b1.png';
import b2 from './Badges/b2.png';
import b3 from './Badges/b3.png';
import b4 from './Badges/b4.jpg';
import b5 from './Badges/b5.png';
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
      <div className='w-full   flex flex-col border-b-gray-200 border-b-2'>
        <div className='rounded-full w-20 h-20  -mt-10 mx-7 flex-shrink-0 overflow-hidden'><img src={"https://bit.ly/3vSTzUu"}/></div>
        <ul className='list-none p-4 px-5'>
          <li style={{lineHeight:1}} className='text-2xl font-bold'>Lara Croft</li>
          <li style={{lineHeight:1}} className="text-gray-500 text-lg" >@lara</li>
          <li className="text-gray-500 text-sm">Btech student</li>
        </ul>
      </div>
      <span className='text-3xl p-4 mt-2'>Your forest</span>
      <div
        style={{ backgroundImage: `url(${level})`, backgroundSize: 'contain' }}
        className='w-full h-64 relative'
      >
        <div className='w-full flex flex-grow absolute bottom-16 '>
          {new Array(5).fill(0).map(() => {
            return (
              <img
                className='w-8 flex-shrink-0'
                src={trees[(Math.random() * trees.length) | 0]}
              />
            );
          })}
        </div>
      </div>
      <div className='w-full py-5'>
        <span className='text-3xl p-4 mt-10'>Achievements</span>
        <div className='flex flex-wrap gap-4 px-4 mt-5'>
          <img className='w-12' src={b1} />
          <img className='w-12' src={b2} />
          <img className='w-14' src={b3} />
          <img className='w-12' src={b4} />
          <img className='w-12' src={b5} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
