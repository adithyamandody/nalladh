import React from 'react';
import text1 from './images/text.png';
import cycle from './images/cycle.png';
import travel from './images/traveling.png';
import video from './images/videos.png';
import video2 from './images/video2.png';

function Learn() {
  const imageStyles = { height: '218px' };
  return (
    <div className='flex flex-col p-4'>
      <img src={text1} />
      <div className='flex flex-nowrap overflow-y-hidden overflow-x-auto'>
        <img src={cycle} className='mr-4' style={imageStyles} />
        <img src={travel} className='mr-4' style={imageStyles} />
        <img src={cycle} className='mr-4' style={imageStyles} />
      </div>
      <img src={video} className='py-2' />
      <img src={video2} className='py-2' />
    </div>
  );
}

export default Learn;
