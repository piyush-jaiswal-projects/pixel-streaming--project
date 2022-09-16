import React, {useState} from "react";
import "./register.css";
import axios from "axios";
var validator = require("email-validator");

function Register(){

    const [name, setName] = useState("");
    const [org, setOrg] = useState("");
    const [email, setEmail] = useState("");

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

    function handleRegistration(){
        if(validator.validate(email)){

            const link = "";
            const code = generateCode();
            const duration = 0;
            const logincount = 1;
            const date = new Date();

//             var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
            
                axios.post('/signup', {
                    'Name': name,
                    'Email': email,
                    'Organization': org,
                    'Link': link,
                    'Code': code,
                    'Date': date,
                    'Duration': duration,
                    'LoginCount': logincount
                }).then((res) => {
                    alert(res.data.message);
                    if(res.data.message === "Success"){
                        // Component Rendering ---> Go to Link & pass duration as props
                    }
                    else if(res.data.message === "failed"){
                        setName("");
                        setOrg("");
                        setEmail("");
                    }
                    else if(res.data.message === "Already Registered"){
                        setEmail("");
                    }
                });
        }
        else{
            alert("Please Enter Valid Email Address");
        }
    }

    return(
        <div className="register-section">
        <div className="register-div">
        <button className="back"><img src="./images/back.png" className="back-image" alt="Back"></img></button>
        <div className="form-container">
        <h3 className="register-title">Your Information</h3>
        <input type="text" className="info-input" placeholder="Name" value={name} onChange={handleNameChange}></input>
        <input type="text" className="info-input" placeholder="Organisation/School" value={org} onChange={handleOrgChange}></input>
        <input type="email" className="info-input" placeholder="Email address" value={email} onChange={handleEmailChange}></input>
        <button className="register-button" onClick={handleRegistration}>Request Access</button>
        </div>
        </div>
        </div>
    );
}

export default Register;