import React from "react";
import "./register.css";

function Register(){
    return(
        <div className="register-section">
        <div className="register-div">
        <button className="back"><img src="./images/back.png" className="back-image" alt="Back"></img></button>
        <div className="form-container">
        <h3 className="register-title">Your Information</h3>
        <input type="text" className="info-input" placeholder="Name"></input>
        <input type="text" className="info-input" placeholder="Organisation/School"></input>
        <input type="email" className="info-input" placeholder="Email address"></input>
        <button className="register-button">Request Access</button>
        </div>
        </div>
        </div>
    );
}

export default Register;