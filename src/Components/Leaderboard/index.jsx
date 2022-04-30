import React from "react"
import ld from './leaderboard.png'

function Leaderboard() {
    return <div className='flex flex-col p-4 flex-grow' style={{backgroundColor:"#f1f1f1"}}>
        <img src={ld} />
    </div>
}
export default Leaderboard;