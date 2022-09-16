import React from "react";
import "./deny.css";

function Stream(props){
    const prevDuration = props.Duration;
    // create a timer starting from (total duration(45) - prev duration)  use this --> https://www.npmjs.com/package/react-countdown or any other suitable
    // On countdown to zero, updateDuration in database && then shutdown the window
    // create a video window
    return(
        <div className="stream-section">
        <div className="video-div">
        
        </div>
        <div className="timer-div">
        
        </div>
        </div>
    );
}

export default Stream;
