import axios from "axios";
import React from "react";
import "./link.css";
import intro1 from "./intro1.png";

function Link(props){
    console.log(props.language);
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
    
      var state=  getCookie("language");
      console.log(` am in  state ${state}`);


// console.log(`i am in link ${language}`)
console.log(`i am in link ${props.language}`)
var language= props.language;
    function handleExit(){
        window.location.replace('/');
    }
    const stateChange=()=>{
        console.log(`i am in link ${state}`)
        if(state==="true"){
            return(
                <>
            <div className="screenOneOverlay">
        {/* english */}
        <button className="skip-btn" onClick={handleSkip}>SKIP INTRO</button>
        <button className="exit-btn" onClick={handleExit}>X</button>
        </div> 
        </> )
        }
        else{
            return(
                <>
            <div className="screenOneOverlay">
        <button className="skip-btn2" onClick={handleSkip}>HOPPA ÖVER INTRO</button>
        <button className="exit-btn" onClick={handleExit}>X</button>
        </div> 
        </>
       
        )
        }
       
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
        {stateChange()}
     
       
        </div>
    );
}

export default Link;