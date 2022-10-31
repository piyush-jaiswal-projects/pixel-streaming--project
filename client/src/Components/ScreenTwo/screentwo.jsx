import axios from "axios";
import React from "react";
import "./screentwo.css";
import intro2 from "./intro2.png";
import Stream from "../Stream/stream.jsx";

function ScreenTwo(props,{language}){

    const [streamComponent, setStreamComponent] = React.useState("");
    const [Display, setDisplay] = React.useState("block");

    function handleExit(){
        window.location.replace('/');
    }

    function handleButton(){
        setDisplay("none");
        setStreamComponent(<Stream />);
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
        <h3 className="section-title2" >No Time to Waste is not compatible with mobile devices .Please visit this page on a computer instead</h3>
        {/* <div id="non-streamer" style={{display:Display}}> */}
        {/* <img className="intro-one" alt="Intro Screen 2" src={intro2}></img> */}
        {/* {language ? <div className="screenTwoOverlay"> */}
        
        {/* <button className="exit-btn" onClick={handleExit}>X</button> */}
        {/* <div className="screen-two-div"> */}
        {/* <button className="lang-button one" onClick={handleButton}>English</button> */}
        {/* <button className="lang-button two" onClick={handleButton}>Svenska</button> */}
        {/* </div>   */}
        {/* </div>   */}
        
        
        {/* <div className="screenTwoOverlay"> */}
      
        {/* <button className="exit-btn" onClick={handleExit}>X</button> */}
        {/* <div className="screen-two-div"> */}
        {/* <button className="lang-button one" onClick={handleButton}>English</button> */}
        {/* <button className="lang-button two" onClick={handleButton}>Svenska</button> */}
        {/* </div>   */}
        {/* </div>   */}

        
        {/* </div> */}
        {/* <div id="streamer"> */}
        <Stream />
        {/* </div> */}
        </div>
    );
}

export default ScreenTwo;