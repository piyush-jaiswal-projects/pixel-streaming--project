/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./access.css";
import axios from "axios";

function Access({ language }) {

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [mail, setMail] = useState("");
    const [cond, setCond] = useState(false);
    const [accessHidden, setAccessHidden] = useState(false);
    const [accessLinkHidden, setAccessLinkHidden] = useState(true);
    const [denyHidden, setDenyHidden] = useState(true);
    const [minutes, setMinutes] = useState(44);
    const [seconds, setSeconds] = useState(60);
    const streamRoot = document.getElementById("stream");
    const [loginTitle, setLoginTitle] = useState("Enter your code");
    const [loginTitleSwedish, setLoginTitleSwedish] = useState("Ange din kod");
    const sendEmail = (e) => {
        e.preventDefault();
    };

    // eslint-disable-next-line no-unused-vars
    var address;
    function handleCodeChange(event) {
        setCode(event.target.value);
    }

    // eslint-disable-next-line no-unused-vars
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function updateLoginCount(email, logincount) {
        const mail = email;
        const newLogincount = logincount + 1;
        axios.post('/updatelogincount', {
            'Email': mail,
            'LoginCount': newLogincount
        }).then((res) => {
            if (res.data.message === "Success") return "done";
            else return "fail";
        });
    }

    function deleteUser(email) {
        const mail = email;
        axios.post('/deleteuser', {
            'Email': mail
        }).then((res) => {
            if (res.data.message === "Success") return "done";
            else return "fail";
        });
    }

    var duration;
    function handleLogin(props) {

        axios.post('/login', {
            'Code': code
        }).then((res) => {
            if (res.data.Message === "Success") {
                const registerDate = Date.parse(res.data.RegisterDate);
                const todayDate = new Date().toISOString();
                address = res.data.Email;
                var d1 = new Date(registerDate);
                var d2 = new Date(todayDate);
                var diff = d1 - d2;
                var dayCount = Math.trunc(diff / 86400e3);
                const logincount = res.data.LoginCount;
                duration = res.data.Duration.Minutes;
                setMinutes(res.data.Duration.Minutes);
                setSeconds(res.data.Duration.Seconds);
                setMail(res.data.Email);
                document.cookie = "email=" + res.data.Email;
                setEmail(res.data.Email);
                // eslint-disable-next-line no-unused-vars
                const result = updateLoginCount(email, logincount);
                console.log(res.Duration);
                console.log(dayCount + logincount + duration);
                if (dayCount <= 7 && logincount < 10) {
                    console.log("Rendering Component");
                    window.location.replace('/stream');
                }
                else if (dayCount > 7) {
                    deleteUser(email);
                    setLoginTitle("Exceeded days limit of 7 days");
                    setLoginTitleSwedish("Dagsgränsen på 7 dagar har överskridits");
                    document.getElementById("email-in").style.borderColor = "red";
                    document.getElementById("email-in").style.color = "red";
                    document.getElementById("log-btn").style.backgroundColor = "red";
                }
                else if (logincount >= 10) {
                    deleteUser(email);
                    setLoginTitle("Exceeded login limit of 10 times");
                    setLoginTitleSwedish("Inloggningsgränsen på 10 gånger har överskridits");
                    document.getElementById("email-in").style.borderColor = "red";
                    document.getElementById("email-in").style.color = "red";
                    document.getElementById("log-btn").style.backgroundColor = "red";
                }
            }
            else if (res.data.Message === "failed") {
                setEmail("");
                setCode("");
                setLoginTitle("Error Occurred");
                setLoginTitleSwedish("Fel inträffade");
                document.getElementById("code-in").style.borderColor = "red";
                document.getElementById("code-in").style.color = "red";
                document.getElementById("email-in").style.borderColor = "red";
                document.getElementById("email-in").style.color = "red";
                document.getElementById("log-btn").style.backgroundColor = "red";
            }
            else if (res.data.Message === "Invalid Code") {
                setEmail("");
                setCode("");
                setLoginTitle("Invalid code");
                setLoginTitleSwedish("Ogiltig kod");
                document.getElementById("code-in").style.borderColor = "red";
                document.getElementById("code-in").style.color = "red";
                document.getElementById("log-btn").style.backgroundColor = "red";

            }
        });

    }

    return (
        <div>
            {language ? <div className="register-section" hidden={accessHidden}>
                <div className="register-div">
                    <Link to="/">
                        <button className="back"><img src="./images/back.png" className="back-image" alt="Back"></img></button>
                    </Link>
                    <div className="form-container">
                        <h3 className="login-title">{loginTitle}</h3>
                        <h3 className="login-para">Your code can be found  in the email you recieved when you registered. Each code can be used 10 times and is valid for 7 days.</h3>
                        <form onSubmit={sendEmail} >
                            {/* <input id="email-in" type="email" className="info-input" placeholder="EMAIL"  value={email}  name="email" onChange={handleEmailChange}></input> */}
                            <input id="code-in" type="text" className="info-input" placeholder="PERSONAL CODE" value={code} onChange={handleCodeChange}></input>
                            <button id="log-btn" className="register-button" onClick={handleLogin}>LOG IN</button>
                        </ form >
                        {/* changed handleLogin with collectData */}
                    </div>
                </div>
            </div> :
                <div className="register-section" hidden={accessHidden}>
                    <div className="register-div">
                        <Link to="/">
                            <button className="back"><img src="./images/back.png" className="back-image" alt="Back"></img></button>
                        </Link>
                        <div className="form-container">
                            <h3 className="login-title">{loginTitleSwedish}</h3>
                            <h3 className="login-para">Din kod finns i e-postmeddelandet du fick när du registrerade dig. bVarje kod kan användas 10 gånger och är giltig i 7 dagar.</h3>
                            <form onSubmit={sendEmail} >
                                {/* <input id="email-in" type="email" className="info-input" placeholder="E-POST"  value={email}  name="email" onChange={handleEmailChange}></input> */}
                                <input id="code-in" type="text" className="info-input" placeholder="PERSONLIG KOD" value={code} onChange={handleCodeChange}></input>
                                <button id="log-btn" className="register-button" onClick={handleLogin}>LOGGA IN</button>
                            </ form >
                            {/* changed handleLogin with collectData */}
                        </div>
                    </div>
                </div>}

        </div>
    );
}

export default Access;