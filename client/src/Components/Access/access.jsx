import React from "react";
import "./access.css";

function Access(){
    return(
        <div className="register-section">
        <div className="register-div">
        <button className="back"><img src="./images/back.png" className="back-image" alt="Back"></img></button>
        <div className="form-container">
        <h3 className="register-title">Access Experience</h3>
        <input type="email" className="info-input" placeholder="Email address"></input>
        <input type="text" className="info-input" placeholder="Personal Code"></input>
        <button className="register-button">Log in</button>
        </div>
        </div>
        </div>
    );
}

export default Access;