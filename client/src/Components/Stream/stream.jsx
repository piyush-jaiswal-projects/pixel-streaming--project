import axios from "axios";
import React from "react";
import { useEffect ,useState} from "react";
import { WebRTCClient } from "@arcware/webrtc-plugin";
// import "./deny.css";

function Stream(props){
    console.log(props.values.Email);
    const [seconds, setSeconds] =useState(60);
    const [minutes, setMinutes] =useState(props.values.Duration);
    const [videoDivHidden, setVideoDivHidden] =useState(false);
    const [total, setTotal] =useState(0);
    var timer;

    const sizeContainerRef = React.useRef();
const containerRef = React.useRef();
const videoRef = React.useRef();

    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
        axios.post('/updateduration',{
                    Email: props.values.Email,
                    Duration: minutes
                }).then((res)=>{
                    if(res.data.Message === "Success"){
                        alert("Stream Closed");
                        // window.close();
                    }
                    else{
                        alert("Error Occurred");
                    }
                });
    });


    useEffect(()=>{

//         const args = {
//             address: "wss://share.ragnarok.arcware.cloud/12c0cfd9-8f8f-41b7-a21d-e10e1019e8d5",
//             packageId: "Name of the package (if there are multiple applications)",
//             settings: {},
//             sizeContainer: sizeContainerRef.current,
//             container: containerRef.current,
//             videoRef: videoRef.current,
//             playOverlay: true, // Set default overlay with play button. Make it false and use loader
//             loader: (val) => {}, // Callback for loading screen, etc. Once stream is ready, the function will be triggered with false value.
//             applicationResponse: (response) => {}, // Callback for Unreal Engine application messages.
//           };
//           const webrtc_client = new WebRTCClient(args);
// const emitUIInteraction = webrtc_client.emitUIInteraction;

        timer = setInterval(()=>{
            setSeconds(seconds-1);
            if(seconds===0){
                setMinutes(minutes-1);
                setSeconds(60);
            }
        },1000)
        return ()=>clearInterval(timer)
    },[seconds])
    if(minutes===0 && seconds===0){
        console.log("time exceed");
        setVideoDivHidden(true);
        axios.post('/updateduration',{
            Email: props.values.Email,
            Duration: minutes
        }).then((res)=>{
            if(res.data.Message === "Success"){
                alert("Stream Time Exceeded");
                window.close();
            }
        });
        clearInterval(timer)
    }

    return(
        <div>
        
        <div ref={sizeContainerRef} className="stream-section">
        <div ref={containerRef} className="video-div">
        <video ref={videoRef} />
        </div>
        </div>
        <div className="timer-div">
        <h1>
        {minutes}:{seconds}
        </h1>
        </div>
        </div>
    );
}

export default Stream;