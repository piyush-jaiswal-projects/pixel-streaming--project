import React from "react";
import "./adminPortal.css";

export default function Portal(){
    return(
    <div className="admin-bg">
    <div className="admin-header">
    ADMIN PORTAL
    </div>
    <div className="div-one">
    <div className="duration-set">
    SET STREAM DURATION
    <input type="text" className="info-input" placeholder="Enter Duration(minutes)" name="email"></input>
    <button className="register-button">Set Duration</button>
    </div>
    <div className="add-admin">
    ADD ADMIN
    <input type="text" className="info-input" placeholder="Username" name="email"></input>
    <input type="text" className="info-input" placeholder="Password" name="email"></input>
    <button className="register-button">Add Admin</button>
    </div>
    <div className="admin-email duration-set">
    CHANGE MAILING ADDRESS
    <input type="text" className="info-input" placeholder="Enter Email" name="email"></input>
    <button className="register-button">Add Email</button>
    </div>
    </div>
    <div className="div-two messages">
    <div className="message-div">
        <h3>User: Piyush Jaiswal</h3>
        <h5>Watched Stream For 5 Minutes 30Seconds.</h5>
    </div>
    <div className="message-div">
    <h3>User: Piyush Jaiswal</h3>
        <h5>Watched Stream For 5 Minutes 30Seconds.</h5>
    </div>
    </div>
    </div>
    );
}