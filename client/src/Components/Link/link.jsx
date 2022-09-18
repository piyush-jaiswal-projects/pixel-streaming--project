import React from "react";
import "./link.css";

function Link(props){
    return(
        <div className="register-section">
        <div className="register-div">
        <div className="form-container" style={{margin:"auto", position:"relative", top:"50px"}}>
        <h3 style={{textAlign:"left",fontFamily:"sans-serif", margin:"0"}}>This is your link</h3>
        <p style={{textAlign:"left",fontFamily:"sans-serif", margin:"0"}}><a href="www.samplelink.com">www.samplelink.com</a></p>
        <br></br>
        <h3 style={{textAlign:"left",fontFamily:"sans-serif", margin:"0"}}>Your code is</h3>
        <p style={{textAlign:"left",fontFamily:"sans-serif", margin:"0"}}>{props.code}</p>
        </div>
        </div>
        </div>
    );
}

export default Link;