/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./access.css";
import axios from "axios";
// import updatelanguage from "../../../../controllers/updatelangage";

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
    console.log(`i am inn  accessssss${language}`);
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
            console.log(res.data);
            if (res.data.Message === "Success") {
                const registerDate = Date.parse(res.data.RegisterDate);
                const todayDate = new Date().toISOString();
                address = res.data.Email;
                var d1 = new Date(registerDate);
                var d2 = new Date(todayDate);
                var diff = d2 - d1;
                var dayCount = Math.trunc(diff / 86400e3);
                const logincount = res.data.LoginCount;
                duration = res.data.Duration.Minutes;
                setMinutes(res.data.Duration.Minutes);
                setSeconds(res.data.Duration.Seconds);
                setMail(res.data.Email);
              
                document.cookie = "email=" + res.data.Email;
                setEmail(res.data.Email);
                // eslint-disable-next-line no-unused-vars
                const result = updateLoginCount(res.data.Email, logincount);
                // console.log(dayCount);
                if (dayCount <= 7 && logincount < 10) {
                    // console.log(language);
                   language? window.location.replace('/stream') : window.location.replace('/streamswed');

                }
                else if (dayCount > 7) {
                    deleteUser(email);
                    document.getElementById("loginTitle1").style.color = "red";
                    document.getElementById("loginTitle1").style.fontSize="25px";
                    setLoginTitle("Exceeded days limit of 10 days");
                    setLoginTitleSwedish("Dagsgränsen på 10 dagar har överskridits");
                    document.getElementById("email-in").style.borderColor = "red";
                    document.getElementById("email-in").style.color = "red";
                    document.getElementById("log-btn").style.backgroundColor = "red";
                }
                else if (logincount >= 10) {
                    deleteUser(email);
                    document.getElementById("loginTitle1").style.color = "red";
                    document.getElementById("loginTitle1").style.fontSize="25px";
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
                document.getElementById("loginTitle1").style.color = "red";
                // document.getElementById("loginTitle1").style.fontSize="20px";
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
                document.getElementById("loginTitle1").style.color = "red";
                // document.getElementById("loginTitle1").style.fontSize="20px";
                setLoginTitle("Invalid code");
                setLoginTitleSwedish("Ogiltig kod");
                document.getElementById("code-in").style.borderColor = "red";
                document.getElementById("code-in").style.color = "red";
                document.getElementById("log-btn").style.backgroundColor = "red";

            }
            else{
                alert(res.data.Message);
            }
        });

    }

    return (
        <div>
         <h3 className="section-title2" >No Time to Waste is not compatible with mobile devices .Please visit this page on a computer instead</h3>
            {language ? <div className="register-section" hidden={accessHidden}>
                <div className="register-div1">
                    <Link to="/">
                        <button className="back">
                        {/* <img src="./images/back.png" className="back-image" alt="Back"></img> */}
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
                    <div className="form-container">
                        <h3 className="login-title1" id="loginTitle1">{loginTitle}</h3>
                        <h3 className="login-para1">Your code can be found  in the email you recieved when you registered. Each code can be used 10 times and is valid for 7 days.</h3>
                        <form onSubmit={sendEmail} >
                            {/* <input id="email-in" type="email" className="info-input" placeholder="EMAIL"  value={email}  name="email" onChange={handleEmailChange}></input> */}
                            <input id="code-in" type="text" className="info-input1" placeholder="PERSONAL CODE" value={code} onChange={handleCodeChange}></input>
                            {console.log("Access.jsx "+language)}
                            <button id="log-btn" className="register-button1" onClick={handleLogin}>LOG IN</button>
                        </ form >
                        {/* changed handleLogin with collectData */}
                    </div>
                </div>
            </div> :
                <div className="register-section" hidden={accessHidden}>
                    <div className="register-div1">
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
                        <div className="form-container">
                            <h3 className="login-title1" id="loginTitle1">{loginTitleSwedish}</h3>
                            <h3 className="login-para1">Din kod finns i e-postmeddelandet du fick när du registrerade dig. bVarje kod kan användas 10 gånger och är giltig i 7 dagar.</h3>
                            <form onSubmit={sendEmail} >
                                {/* <input id="email-in" type="email" className="info-input" placeholder="E-POST"  value={email}  name="email" onChange={handleEmailChange}></input> */}
                                <input id="code-in" type="text" className="info-input1" placeholder="PERSONLIG KOD" value={code} onChange={handleCodeChange}></input>
                                <button id="log-btn" className="register-button1" onClick={handleLogin}>LOGGA IN</button>
                            </ form >
                            {/* changed handleLogin with collectData */}
                        </div>
                    </div>
                </div>}

        </div>
    );
}

export default Access;