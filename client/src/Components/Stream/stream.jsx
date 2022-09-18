import axios from "axios";
import React from "react";
import { useEffect ,useState} from "react";
// import "./deny.css";

function Stream(props){
    console.log(props.values.Email);
    const [seconds, setSeconds] =useState(60);
    const [minutes, setMinutes] =useState(props.values.Duration);
    const [videoDivHidden, setVideoDivHidden] =useState(false);
    // const [total, setTotal] =useState(0);
    var timer;

    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
        axios.post('/updateduration',{
            Email: props.values.Email,
            Duration: minutes
        }).then((res)=>{
            if(res.data.Message === "Success"){
                alert("Stream Closed");
                window.close();
            }
        });
    });


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
    // create a timer starting from (total duration(45) - prev duration)  use this --> https://www.npmjs.com/package/react-countdown or any other suitable
  
    // On countdown to zero, updateDuration in database && then shutdown the window
    // create a video window
    return(
        <div className="stream-section">
        <div className="video-div" hidden={videoDivHidden}>
    
        </div>
        <h1> {minutes}:{seconds}</h1> 
        <div className="timer-div">
        
        </div>
        </div>
    );
}

export default Stream;