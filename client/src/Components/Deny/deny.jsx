import React from "react";
import "./deny.css";

function Deny(){
    return(
        <div className="register-section">
        <div className="register-div">
        <div className="form-container" style={{margin:"auto", position:"relative", top:"50px"}}>
        <p style={{textAlign:"left",fontFamily:"sans-serif", margin:"0", fontWeight:"bold"}}>
            That code is not valid. Please apply for a new one by clicking the link below.
        </p>
        <br></br>
        <button className="register-button">Request Access</button>
        </div>
        </div>
        </div>
    );
}

export default Deny;