import React from "react";
import { useEffect ,useState} from "react";
import { WebRTCClient } from "@arcware/webrtc-plugin";
// import "./deny.css";

function Stream(props){
    const prevDuration = props.Duration;
    // const [seconds, setSeconds] =useState(60);
    // const [minutes, setMinutes] =useState(45);
    // const [total, setTotal] =useState(0);
    // var timer;
    useEffect(()=>{
        const args = {
            address: "wss://share.ragnarok.arcware.cloud/12c0cfd9-8f8f-41b7-a21d-e10e1019e8d5",
            packageId: "Name of the package (if there are multiple applications)",
            settings: {},
            sizeContainer: sizeContainerRef.current,
            container: containerRef.current,
            videoRef: videoRef.current,
            playOverlay: true, // Set default overlay with play button. Make it false and use loader
            loader: (val) => {}, // Callback for loading screen, etc. Once stream is ready, the function will be triggered with false value.
            applicationResponse: (response) => {}, // Callback for Unreal Engine application messages.
          };
          const webrtc_client = new WebRTCClient(args);
const emitUIInteraction = webrtc_client.emitUIInteraction;
        // timer = setInterval(()=>{
        //     setSeconds(seconds-1);
        //     if(seconds===0){
        //         setMinutes(minutes-1);
        //         setSeconds(60);
        //     }
        // },1000)
        // return ()=>clearInterval(timer)
    })
    if(minutes===0){
        console.log("time exceed");
        clearInterval(timer)
    }
    
   

  
    // create a timer starting from (total duration(45) - prev duration)  use this --> https://www.npmjs.com/package/react-countdown or any other suitable
  
    // On countdown to zero, updateDuration in database && then shutdown the window
    // create a video window
    return(
        <div ref={sizeContainerRef} className="stream-section">
        <div ref={containerRef} className="video-div">
        <video ref={videoElRef} />
        </div>
        
        <div className="timer-div">
        </div>
     
       
        </div>
    );
}

export default Stream;
