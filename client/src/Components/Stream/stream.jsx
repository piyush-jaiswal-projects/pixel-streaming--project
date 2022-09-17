import React from "react";
import { useEffect ,useState} from "react";
// import "./deny.css";

function Stream(props){
    const prevDuration = props.Duration;
    const [seconds, setSeconds] =useState(60);
    const [minutes, setMinutes] =useState(45);
    const [total, setTotal] =useState(0);
    var timer;
    useEffect(()=>{

        timer = setInterval(()=>{
            setSeconds(seconds-1);
            if(seconds===0){
                setMinutes(minutes-1);
                setSeconds(60);
            }
        },1000)
        return ()=>clearInterval(timer)
    },[seconds])
    if(minutes===0){
        console.log("time exceed");
        clearInterval(timer)
    }
    
   

  
    // create a timer starting from (total duration(45) - prev duration)  use this --> https://www.npmjs.com/package/react-countdown or any other suitable
  
    // On countdown to zero, updateDuration in database && then shutdown the window
    // create a video window
    return(
        <div className="stream-section">
        <div className="video-div">
    
        </div>
        <h1> {minutes}:{seconds}</h1> 
        <div className="timer-div">
        
        </div>
        </div>
    );
}

export default Stream;
