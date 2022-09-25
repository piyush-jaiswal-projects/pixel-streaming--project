import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Navigate} from "react-router-dom";
import "./access.css";
import axios from "axios";
import AccessLink from "../Link/link.jsx";
import Deny from "../Deny/deny.jsx";
import Stream from "../Stream/stream";
import { setMaxListeners } from "events";
// import emailjs from '@emailjs/browser';

function Access(){

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
    const sendEmail = (e) => {
        e.preventDefault();
      };
    var address;
    function handleCodeChange(event){
        setCode(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function updateLoginCount(email, logincount){
        const mail = email;
        const loginCount = logincount;
        const newLogincount = logincount + 1;
        axios.post('/updatelogincount',{
            'Email': mail,
            'LoginCount': newLogincount
        }).then((res)=>{
            if(res.data.message === "Success") return "done";
            else return "fail";
        });
    }

    function deleteUser(email){
        const mail = email;
        axios.post('/deleteuser',{
            'Email': mail
        }).then((res)=>{
            if(res.data.message === "Success") return "done";
            else return "fail";
        });
    }

    var duration;
    function handleLogin(props){
        
        axios.post('/login', {
            'Email': email,
            'Code': code
        }).then((res) => {
            alert(res.data.Message);
            if(res.data.Message === "Success"){
                const registerDate = Date.parse(res.data.RegisterDate);
                const todayDate = new Date().toISOString();
                address=res.data.Email;
                var d1 = new Date(registerDate);
                var d2 = new Date(todayDate);
                var diff = d1-d2;
                var dayCount = Math.trunc(diff / 86400e3);
                // var Difference_In_Time = registerDate.getUTCMilliseconds() - todayDate.getUTCMilliseconds();
                // const dayCount = Difference_In_Time / (1000 * 3600 * 24);
                const logincount = res.data.LoginCount;
                duration = res.data.Duration.Minutes;
                setMinutes(res.data.Duration.Minutes);
                setSeconds(res.data.Duration.Seconds);
                setMail(res.data.Email);
                document.cookie="email="+res.data.Email;
                const result = updateLoginCount(email, logincount);
                console.log(res.Duration);
                console.log(dayCount + logincount + duration);
                if(dayCount <= 5 && logincount <5){
                    console.log("Rendering Component");
                    window.location.replace('/stream');
                }
                else if(dayCount >5){
                    deleteUser(email);
                    alert("5 days limit exceeded!");
                    window.location.replace('/access-denied');
                }
                else if(logincount >=5){
                    deleteUser(email);
                    alert("5 login limit exceeded!");
                    window.location.replace('/access-denied');
                }
                // else if(duration >=45){
                //     deleteUser(email);
                //     alert("45 mins duration limit exceeded!");
                //     window.location.replace('/access-denied');
                // }
            }
            else if(res.data.Message === "failed"){
                setEmail("");
                setCode("");
            }
            else if(res.data.Message === "Invalid Code"){
                setEmail("");
                setCode("");
                    window.location.replace('/access-denied');
            }
        });

    }

    return(
        <div>
        <div className="register-section" hidden={accessHidden}>
        <div className="register-div">
        <Link to="/">
        <button className="back"><img src="./images/back.png" className="back-image" alt="Back"></img></button>
        </Link>
        <div className="form-container">
        <h3 className="register-title">Access Experience</h3>
        <form onSubmit={sendEmail} >
        <input type="email" className="info-input" placeholder="Email address"  value={email}  name="email" onChange={handleEmailChange}></input>
        <input type="text" className="info-input" placeholder="Personal Code"  value={code}  onChange={handleCodeChange}></input>
        <button className="register-button"   onClick={ handleLogin }>Log in</button>
        </ form >
        {/* changed handleLogin with collectData */}
        </div>
        </div>
        </div>
        </div>
    );
}

export default Access;