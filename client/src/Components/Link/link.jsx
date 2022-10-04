import axios from "axios";
import React from "react";
import "./link.css";
import intro1 from "./intro1.png";

function Link(props,{language}){

    function handleExit(){
        window.location.replace('/');
    }

    function handleSkip(){
        window.location.replace('/screentwo');
    }
    
    const [code ,setCode] = React.useState("");
    // console.log(props.value);
    const email = props.value;
    const condition = props.cond;
    if(condition === false){
    axios.post('/getcode',{
        Email: email
    }).then((res)=>{
        if(res.data.Message === "Success"){
            setCode(res.data.Code);
        }
        else if(res.data.Message === "failed"){
         alert("Error Occurred");
        }
    });}
    return(
       
        <div className="register-section">
        <img className="intro-one" alt="Intro Screen 1" src={intro1}></img>
        {language ? <div className="screenOneOverlay">
        {/* english */}
        <button className="skip-btn" onClick={handleSkip}>SKIP INTRO</button>
        <button className="exit-btn" onClick={handleExit}>X</button>
        </div>  
        :<>
        {/* belgium */}
        <div className="screenOneOverlay">
        <button className="skip-btn" onClick={handleSkip}>SKIP INTRO</button>
        <button className="exit-btn" onClick={handleExit}>X</button>
        </div>  

        </>}
        </div>
    );
}

export default Link;