import React from 'react'
import { useRef } from 'react';

function One(props) {
const name = useRef(0)
const maths = useRef()
const physics = useRef()
const telugu = useRef()
const chemistry = useRef()
const history = useRef()
  return (
    <><div className='subject'>
    <label>Name</label>  
    <input type="text" ref = {name} />
    <label></label>
    </div>
    <div className='subject'>
    <label>Maths</label>  
    <input type="text" ref = {maths} />
    <label id = "Maths"></label>
    </div>
    
    <div className='subject'>
    <label>Physics</label>  
    <input type="text" ref = {physics} />
    <label id = "Physics"></label>
    </div>
    
    <div className='subject'>
    <label>Chemistry</label>  
    <input type="text" ref = {chemistry} />
    <label id = "Chemistry"></label>
    </div>
    <div className='subject'>
    <label>Telugu</label>  
    <input type="text" ref = {telugu} />
    <label id = "Telugu"></label>
    </div>
    <div className='subject'>
    <label>History</label>  
    <input type="text" ref = {history} />
    <label id = "History"></label>
    </div>

 <button onClick={()=>{ document.getElementById("endresult").innerHTML = name.current.value;
 document.getElementById("data").innerHTML = 
 Number(maths.current.value) + 
 Number(physics.current.value) +
 Number(chemistry.current.value) +
 Number(telugu.current.value) +
 Number(history.current.value); 
 document.getElementById("Maths"). innerHTML = Number(maths.current.value > 35) ? "pass" : "failed";
 document.getElementById("Physics"). innerHTML = Number(maths.current.value > 35) ? "pass" : "failed";
 document.getElementById("Chemistry"). innerHTML = Number(maths.current.value > 35) ? "pass" : "failed";
 document.getElementById("Telugu"). innerHTML = Number(maths.current.value > 35) ? "pass" : "failed";
 document.getElementById("History"). innerHTML = Number(maths.current.value > 35) ? "pass" : "failed";
 }}>submit</button>
 <br />
 <label id = "endresult"></label>
 <br />
 <label id = "data"></label></>
  )
}

export default One