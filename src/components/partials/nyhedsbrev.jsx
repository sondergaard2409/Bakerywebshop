import React from 'react'
import {Nyhedsimg, Nyhedsstyle} from './nyhedsbrev.style'

export const Nyhedsbrev = () => {
  return (
    <Nyhedsimg>
        <Nyhedsstyle>
            <div className='center'>
                <h2>Tilmed dig vores nyhedsbrev</h2>
                <p className='text'>Scuttle rigging scurvy cog lee nipper Letter of Marque transom Buccaneer Privateer.</p>
                <div className='sign'>@</div>
                <input type="email" />
                <button>TILMELD</button>
            </div>
        </Nyhedsstyle>
    </Nyhedsimg>
   )
}