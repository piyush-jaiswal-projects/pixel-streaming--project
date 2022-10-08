import axios from "axios";
import React ,{useContext,useState}from  "react";
import "./link.css";
import intro1 from "./intro1.png";
// import {state} from "../../../src/Routing"
function Link({ language }){

   
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

    function handleExit(){
        window.location.replace('/');
    }

    function handleSkip(){
        window.location.replace('/screentwo');
      }

      console.log("link "+language);
    
    return(
       
        <div className="register-section">
        <img className="intro-one" alt="Intro Screen 1" src={intro1}></img>
    
            <div className="screenOneOverlay">
        {/* english */}
        <button id="skipBtn" className="skip-btn" onClick={handleSkip}>SKIP INTRO</button>
        <button className="exit-btn" onClick={handleExit}>X</button>
        </div>       
        </div>
    );
}

export default Link;