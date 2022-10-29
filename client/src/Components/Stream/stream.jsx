import axios from "axios";
import React from "react";
import { useEffect ,useState} from "react";
import { WebRTCClient } from "@arcware/webrtc-plugin";
import "./stream.css";

function Stream(props,{language}){

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    

    const address = getCookie("email");
    const [seconds, setSeconds] =useState(0);
    const [minutes, setMinutes] =useState(0);
    var [timerDuration, setTimerDuration] = useState(30);
    var timer;

    const sizeContainerRef = React.useRef();
const containerRef = React.useRef();
const videoRef = React.useRef();

window.onbeforeunload = confirmExit;
function confirmExit(){
    const newDuration=(minutes*60)+seconds;
    axios.post('/addNewSessionDuration',{
        NewDuration: newDuration
    }).then((res)=>{
        if(res.data.Message === "Success"){
            console.log("SUCCESS + Stream Closed");
        }
        else{
            console.log("FAILED + Error Occurred");
        }
    });
    axios.post('/updateduration',{
                Email: address,
                Duration: {
                    Minutes: minutes,
                    Seconds: seconds
                }
            }).then((res)=>{
                if(res.data.Message === "Success"){
                    console.log("Stream Closed");
                }
                else{
                    alert("Error Occurred");
                }
            });
}
const state = "standby";

useEffect(()=>{
    axios.post('/startTimer')
    .then((res)=>{
        setTimerDuration(res.data.Duration);
        // window.location.replace('/login');
    });
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
}, [])



useEffect(()=>{
    console.log(timerDuration);
        timer = setInterval(()=>{
            setSeconds(seconds+1);
            if(seconds===59){
                setMinutes(minutes+1);
                setSeconds(0);
            }
        },1000)
        return ()=>clearInterval(timer)
    },[seconds])
    if(minutes===(timerDuration/60000) && seconds===0){
        console.log("time exceed");
        clearInterval(timer)
        alert("Stream Time Exceeded");
        window.location.replace('/login');
    }

    return(
        <div>
        {/* use code 
        {language ? english :belgium} */}
        <div ref={sizeContainerRef} className="stream-section">
        <div ref={containerRef} className="video-div">
        <video ref={videoRef} />
        </div>
        </div>
        <div className="timer-div">
        <h1>
        {/* {minutes}:{seconds} */}
        </h1>
        </div>
        </div>
    );
}

export default Stream;