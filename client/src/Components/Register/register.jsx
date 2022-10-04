import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./register.css";
import axios from "axios";
import AccessLink from "../Link/link.jsx";
var validator = require("email-validator");

function Register({language}){

    
    document.cookie = "code=";

    const [name, setName] = useState("");
    const [org, setOrg] = useState("");
    const [email, setEmail] = useState("");
    const [registerHidden, setRegisterHidden] = useState(false);

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
                        window.location.replace('/access-link');
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
        {language?   <div className="register-section" hidden={registerHidden}>
 
 <div className="user-register-div">
 <Link to="/">
 <button className="back"><img src="./images/back.png" className="back-image" alt="Back"></img></button>
 </Link>
 <br></br>
 <div className="form-container">
 <h3 className="user-register-title">Your details</h3>
 <input type="text" className="user-info-input" placeholder="NAME" value={name} onChange={handleNameChange}></input>
 <input type="text" className="user-info-input" placeholder="ORG/SCHOOL" value={org} onChange={handleOrgChange}></input>
 <input type="email" className="user-info-input" placeholder="EMAIL" value={email} onChange={handleEmailChange}></input>
 <input className="check" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
<label for="vehicle1" className="check-label"> I AM A TEACHER</label><br></br>
 <button className="user-register-button" onClick={handleRegistration}>REQUEST ACCESS</button>
 </div>
 </div>
 </div>:<>
 {/* belgium */}
 <div className="register-section" hidden={registerHidden}>
 
 <div className="user-register-div">
 <Link to="/">
 <button className="back"><img src="./images/back.png" className="back-image" alt="Back"></img></button>
 </Link>
 <div className="form-container">
 <h3 className="user-register-title">Dina detaljer</h3>
 <input type="text" className="user-info-input" placeholder="NAMN" value={name} onChange={handleNameChange}></input>
 <input type="text" className="user-info-input" placeholder="ORG/SKOLA" value={org} onChange={handleOrgChange}></input>
 <input type="email" className="user-info-input" placeholder="E-POST" value={email} onChange={handleEmailChange}></input>
 <input className="check" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
<label for="vehicle1" className="check-label">JAG ÄR EN LÄRARE</label><br></br>
 <button className="user-register-button" onClick={handleRegistration}>BEGÄRA TILLGÅNG</button>
 </div>
 </div>
 </div>
 </> }
      
        </div>
    );
}

export default Register;