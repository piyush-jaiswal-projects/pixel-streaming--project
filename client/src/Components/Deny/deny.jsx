import React from "react";
import "./deny.css";
import {Link} from "react-router-dom";

function Deny({language}){
    return(
        <div className="register-section">
        {language? 
         <div className="register-div">
        <div className="form-container" style={{margin:"auto", position:"relative", top:"50px"}}>
        <p style={{textAlign:"left",fontFamily:"sans-serif", margin:"0", fontWeight:"bold"}}>
            That code is not valid. Please apply for a new one by clicking the link below.
        </p>
        <br></br>
        <Link to='/register'>
        <button className="register-button">Request Access</button>
        </Link>
        </div>
        </div>:
    
        <div className="register-div">
        <div className="form-container" style={{margin:"auto", position:"relative", top:"50px"}}>
        <p style={{textAlign:"left",fontFamily:"sans-serif", margin:"0", fontWeight:"bold"}}>
            That code is not valid. Please apply for a new one by clicking the link below.other language
        </p>
        <br></br>
        <Link to='/register'>
        <button className="register-button">Request Access</button>
        </Link>
        </div>
        </div>}
        
        </div>
    );
}

export default Deny;