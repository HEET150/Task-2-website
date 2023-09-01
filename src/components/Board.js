import React from 'react'
import Profiles from './Profiles.js';
import { Leaderboard } from './database.js';
export default function Board() {
    const handleClick=(e)=>{
        console.log(e.target)
    }
  return (
    <div className='Board'>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className="Leaderboard">Leaderboard</h1>
        <div className="duration">
            
        </div>
        <Profiles Leaderboard={Leaderboard}></Profiles>
    </div>

  )
}
