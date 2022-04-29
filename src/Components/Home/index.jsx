import React from 'react'
import pub from "./pub.svg";
import light from "./light.svg";
import roundProgressBar from './round-progress-bar1.png'
function Home() {
  return (
    <div  style={{background:"linear-gradient(#fff,#fdfdfd)"}}className='h-full w-full flex flex-col flex-grow'>
        <div className="mt-14 px-5 text-2xl"><h3 className='font-bold'>Hello Nithin</h3></div>
      <div>
          <img src={roundProgressBar} className="mx-auto mt-3" />
      </div>
      <h3 className='px-5 text-base font-medium'>Your activity today</h3>
      <div className='px-5 h-24 mx-3 flex items-center' style={{borderRadius:"5px",boxShadow:" 0px 4px 41px rgba(0, 0, 0, 0.05)"}}>
        
            
              <img src={pub} alt="" />
              <h1 className='text-2xl font-bold ml-5'>Used public transport</h1>
            
          
           
             
       </div>
    </div>
  )
}

export default Home