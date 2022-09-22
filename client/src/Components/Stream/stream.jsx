import axios from "axios";
import React from "react";
import { useEffect ,useState} from "react";
import { WebRTCClient } from "@arcware/webrtc-plugin";
import "./stream.css";

function Stream(props){

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
    console.log(props.values);
    // const [seconds, setSeconds] =useState(props.values.Seconds);
    // const [minutes, setMinutes] =useState(props.values.Minutes);

    // const [mail, setMail] =useState(props.values.Email);

    const address = getCookie("email");
    const [seconds, setSeconds] =useState(59);
    const [minutes, setMinutes] =useState(44);
    var timer;

    const sizeContainerRef = React.useRef();
const containerRef = React.useRef();
const videoRef = React.useRef();

// window.addEventListener("onunload",function(event){
//     event.preventDefault();
//     axios.post('/updateduration',{
//         Email: address,
//         Duration: {
//             Minutes: minutes,
//             Seconds: seconds
//         }
//     }).then((res)=>{
//         if(res.data.Message === "Success"){
//             alert("Stream Closed");
//         }
//         else{
//             alert("Error Occurred");
//         }
//     });
//     console.log("Stream Closed!!!");
//     alert("Stream Closed !!!");
// });

window.onbeforeunload = confirmExit;
function confirmExit(){
    axios.post('/updateduration',{
                Email: address,
                Duration: {
                    Minutes: minutes,
                    Seconds: seconds
                }
            }).then((res)=>{
                if(res.data.Message === "Success"){
                    console.log("Stream Closed");
                    alert("Stream Closed !!!");
                }
                else{
                    alert("Error Occurred");
                }
            });
    return "Want to leave page ?";
}

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
// useEffect(()=>{
//             const args = {
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
// })
 

    // useEffect(()=>{

    //     timer = setInterval(()=>{
    //         setSeconds(seconds-1);
    //         if(seconds===0){
    //             setMinutes(minutes-1);
    //             setSeconds(59);
    //         }
    //     },1000)
    //     return ()=>clearInterval(timer)
    // },[seconds])
    // if(minutes===0 && seconds===0){
    //     console.log("time exceed");
    //     axios.post('/updateduration',{
    //         Email: props.values.Email,
    //         Duration: {
    //             Minutes: 0,
    //             Seconds: 0
    //         }
    //     }).then((res)=>{
    //         if(res.data.Message === "Success"){
    //             alert("Stream Time Exceeded");
    //             window.close();
    //         }
    //     });
    //     clearInterval(timer)
    
        timer = setInterval(()=>{
            setSeconds(seconds-1);
            if(seconds===0){
                setMinutes(minutes-1);
                setSeconds(59);
            }
        },1000)
        return ()=>clearInterval(timer)
    },[seconds])
    if(minutes===0 && seconds===0){
        console.log("time exceed");
        clearInterval(timer)
        alert("Stream Time Exceeded");
        window.close();
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
        {/* {minutes}:{seconds} */}
        </h1>
        </div>
        </div>
    );
}

export default Stream;