import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";
import Mobileview from "../Home/mobileview"
var validator = require("email-validator");



function Register({ language }) {
    const navigate = useNavigate();
    document.cookie = "code=";

    const [name, setName] = useState("");
    const [org, setOrg] = useState("");
    const [email, setEmail] = useState("");
    const [registerTitle, setRegisterTitle] = useState("Your details");
    const [registerTitleSweden, setRegisterTitleSweden] = useState("Dina detaljer");
    // const [registerHidden, setRegisterHidden] = useState(false);
    const [title, setTitle] = useState("block");
    const [emailError, setEmailError] = useState("none");
    const [invalid, setInvalid] = useState("none");
    const rBtn = document.getElementById("r-btn");
    const inEmail = document.getElementById("in-email");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleOrgChange(event) {
        setOrg(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function generateCode() {
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var result = ""
        var charactersLength = characters.length;

        for (var i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return (result);
    }
    var code = generateCode();
    function handleRegistration() {
        if (validator.validate(email)) {

            // Stream Link
            const link = `arcwarestreamingproject.herokuapp.com/access-link/${code}`;
            const minutes = 44;
            const seconds = 60;
            const logincount = 0;
            const date = new Date();
            const teacher = document.getElementById("vehicle1").checked;
            // console.log(teacher);
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
                'LoginCount': logincount,
                'Language': language,
                Teacher: teacher
            }).then((res) => {
                if (res.data.Message === "Success") {
                    // window.location.replace(`/access-link/${code}`);
                    document.getElementById("Title").style.color="Green";
                    language? setRegisterTitle("Check Email") : setRegisterTitleSweden("Kolla mailen");
                }
                else if (res.data.Message === "failed") {
                    setName("");
                    setOrg("");
                    setEmail("");
                    setTitle("none");
                    setInvalid("none");
                    setInvalid("block");
                }
                else if (res.data.Message === "Already Registered") {
                    setEmail("");
                    inEmail.style.color = "red";
                    inEmail.style.borderColor = "red";
                    alert(res.data.Message);
                }
            });
        }
        else {
            setTitle("none");
            setInvalid("none");
            setEmailError("block");
            rBtn.style.backgroundColor = "red";
            inEmail.style.color = "red";
            inEmail.style.borderColor = "red";
        }
        // navigate(`/access-link/${code}`);
        
    }

    return (
        <div>
      <Mobileview />
            {language ? <div className="register-section" >

                <div className="user-register-div1">
                    <Link to="/">
                        <button className="back">
                        <svg className="back-svg" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2058 4727 c-31 -13 -74 -38 -95 -55 -77 -62 -1882 -1878 -1907
-1920 -38 -61 -60 -154 -52 -225 14 -132 -40 -73 1014 -1129 795 -796 975
-971 1020 -994 78 -39 202 -46 285 -14 89 34 153 90 191 169 28 60 31 75 31
161 0 165 16 144 -562 729 -274 278 -534 536 -579 575 -45 40 -118 91 -167
116 l-86 45 1837 5 1837 5 57 23 c81 33 160 108 200 190 30 60 33 75 33 152
-1 70 -5 95 -27 142 -35 76 -99 143 -173 181 l-60 32 -1855 5 -1855 5 95 50
95 49 576 576 c665 664 634 624 634 795 0 89 -3 106 -28 156 -15 31 -50 78
-77 103 -72 68 -126 89 -235 93 -77 3 -98 0 -147 -20z"/>
</g>
</svg>
                        </button>
                        {/* <img src="./images/back.png" className="back-image" alt="Back"></img> */}
                    </Link>
                    <br></br>
                    <div className="form-container">
                        <h3 className="user-register-title" id="Title" style={{ display: title }}>{registerTitle}</h3>
                        <h3 className="email-error-title" style={{ display: emailError }}>Invalid email format</h3>
                        <h3 className="user-register-title error-title" style={{ display: invalid }}>Some error occurred</h3>
                        <input type="text" className="user-info-input" placeholder="NAME" value={name} onChange={handleNameChange}></input>
                        <input type="text" className="user-info-input" placeholder="ORG/SCHOOL" value={org} onChange={handleOrgChange}></input>
                        <input id="in-email" type="email" className="user-info-input" placeholder="EMAIL" value={email} onChange={handleEmailChange}></input>
                        <input className="check" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                        <label for="vehicle1" className="check-label"> I AM A TEACHER</label><br></br>
                        <button id="r-btn" className="user-register-button " onClick={handleRegistration}>REQUEST ACCESS</button>
                    </div>
                </div>
            </div> : <>
                {/* belgium */}
                <div className="register-section" >

                    <div className="user-register-div1">
                        <Link to="/">
                            <button className="back">
                            <svg className="back-svg" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2058 4727 c-31 -13 -74 -38 -95 -55 -77 -62 -1882 -1878 -1907
-1920 -38 -61 -60 -154 -52 -225 14 -132 -40 -73 1014 -1129 795 -796 975
-971 1020 -994 78 -39 202 -46 285 -14 89 34 153 90 191 169 28 60 31 75 31
161 0 165 16 144 -562 729 -274 278 -534 536 -579 575 -45 40 -118 91 -167
116 l-86 45 1837 5 1837 5 57 23 c81 33 160 108 200 190 30 60 33 75 33 152
-1 70 -5 95 -27 142 -35 76 -99 143 -173 181 l-60 32 -1855 5 -1855 5 95 50
95 49 576 576 c665 664 634 624 634 795 0 89 -3 106 -28 156 -15 31 -50 78
-77 103 -72 68 -126 89 -235 93 -77 3 -98 0 -147 -20z"/>
</g>
</svg>
                            </button>
                        </Link>
                        <br></br>
                        <div className="form-container">
                            <h3 className="user-register-title" id="Title" style={{ display: title }}>{registerTitleSweden}</h3>
                            <h3 className="user-register-title email-error-title" style={{ display: emailError }}>Ogiltigt e-postformat</h3>
                            <h3 className="user-register-title error-title" style={{ display: invalid }}>Något fel uppstod</h3>
                            <input type="text" className="user-info-input" placeholder="NAMN" value={name} onChange={handleNameChange}></input>
                            <input type="text" className="user-info-input" placeholder="ORG/SKOLA" value={org} onChange={handleOrgChange}></input>
                            <input id="in-email" type="email" className="user-info-input" placeholder="E-POST" value={email} onChange={handleEmailChange}></input>
                            <input className="check" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                            <label for="vehicle1" className="check-label">JAG ÄR EN LÄRARE</label><br></br>
                            <button id="r-btn" className="user-register-button" onClick={handleRegistration}>BEGÄRA åtkomst</button>
                        </div>
                    </div>
                </div>
            </>}

        </div>
    );
}

export default Register;