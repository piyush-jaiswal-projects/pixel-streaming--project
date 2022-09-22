import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./register.css";
import axios from "axios";
import AccessLink from "../Link/link.jsx";
var validator = require("email-validator");

function Register(){

    
    document.cookie = "code=";

    const [name, setName] = useState("");
    const [org, setOrg] = useState("");
    const [email, setEmail] = useState("");
    const [registerHidden, setRegisterHidden] = useState(false);
    const [accessLinkHidden, setAccessLinkHidden] = useState(true);

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleOrgChange(event){
        setOrg(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function generateCode(){
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var result = ""
        var charactersLength = characters.length;

        for ( var i = 0; i < 5 ; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));}

          return (result);
    }
    var code = generateCode();;
    function handleRegistration(){
        if(validator.validate(email)){

            // Stream Link
            const link = "";
            const minutes = 44;
            const seconds = 60;
            const logincount = 0;
            const date = new Date();
            
                axios.post('/signup', {
                    'Name': name,
                    'Email': email,
                    'Organization': org,
                    'Link': link,
                    'Code': code,
                    'RegisterDate': date,
                    'Duration': {
                        'Minutes': minutes,
                        'Seconds': seconds
                    },
                    'LoginCount': logincount
                }).then((res) => {
                    alert(res.data.Message);
                    if(res.data.Message === "Success"){

                        // Component Rendering ---> Go to 
                        setRegisterHidden(true);
                        setAccessLinkHidden(false);
                    }
                    else if(res.data.Message === "failed"){
                        setName("");
                        setOrg("");
                        setEmail("");
                    }
                    else if(res.data.Message === "Already Registered"){
                        setEmail("");
                    }
                });
        }
        else{
            alert("Please Enter Valid Email Address");
        }
    }

    return(
        <div>
        <div className="register-section" hidden={registerHidden}>
        <div className="register-div">
        <Link to="/">
        <button className="back"><img src="./images/back.png" className="back-image" alt="Back"></img></button>
        </Link>
        <div className="form-container">
        <h3 className="register-title">Your Information</h3>
        <input type="text" className="info-input" placeholder="Name" value={name} onChange={handleNameChange}></input>
        <input type="text" className="info-input" placeholder="Organisation/School" value={org} onChange={handleOrgChange}></input>
        <input type="email" className="info-input" placeholder="Email address" value={email} onChange={handleEmailChange}></input>
        <button className="register-button" onClick={handleRegistration}>Request Access</button>
        </div>
        </div>
        </div>
        <div hidden={accessLinkHidden}>
        <AccessLink value={email} cond={accessLinkHidden}/>
        </div>


        </div>
    );
}

export default Register;