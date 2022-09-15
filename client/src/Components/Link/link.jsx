import React from "react";
import "./link.css";

function Link(){
    return(
        <div className="register-section">
        <div className="register-div">
        <div className="form-container" style={{margin:"auto", position:"relative", top:"50px"}}>
        <h3 style={{textAlign:"left",fontFamily:"sans-serif", margin:"0"}}>This is your link</h3>
        <p style={{textAlign:"left",fontFamily:"sans-serif", margin:"0"}}>www.samplelink.com</p>
        <br></br>
        <h3 style={{textAlign:"left",fontFamily:"sans-serif", margin:"0"}}>Your code is</h3>
        <p style={{textAlign:"left",fontFamily:"sans-serif", margin:"0"}}>ABCDEF</p>
        </div>
        </div>
        </div>
    );
}

export default Link;