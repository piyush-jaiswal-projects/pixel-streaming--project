import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./access.css";
import axios from "axios";
import AccessLink from "../Link/link.jsx";
import Deny from "../Deny/deny.jsx";
import Stream from "../Stream/stream";

function Access(){

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [accessHidden, setAccessHidden] = useState(false);
    const [accessLinkHidden, setAccessLinkHidden] = useState(true);
    const [denyHidden, setDenyHidden] = useState(true);
    const [streamHidden, setStreamHidden] = useState(true);

    function handleCodeChange(event){
        setCode(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function updateLoginCount(email, logincount){
        const mail = email;
        // const loginCount = logincount;
        // const newLogincount = logincount + 1;
        var loginCount = 0;

        axios.post('/updatelogincount',{
            'Email': mail,
            'LoginCount': logincount //newLogincount
        }).then((res)=>{
            if(res.data.message === "Success"){
                loginCount++;
                return "done";    
            }else 
                return "fail";
        });
    }

    var duration;
    function handleLogin(props){
        
        axios.post('/login', {
            'Email': email,
            'Code': code
        }).then((res) => {
            // alert(res.data.message);
            if(res.data.message === "Success"){
                const registerDate = res.data.RegisterDate;
                const todayDate = new Date();
                var Difference_In_Time = registerDate.getTime() - todayDate.getTime();
                const dayCount = Difference_In_Time / (1000 * 3600 * 24);
                const logincount = res.data.LoginCount;
                duration = res.data.Duration;
                const result = updateLoginCount(email, logincount);
                if(dayCount <= 5 && logincount <= 5 && duration <= 45 && result === "done"){
                    // Go to stream and pass duration as props
                    alert("Login Success");
                    setAccessHidden(true);
                    setAccessLinkHidden(true);
                    setAccessHidden(true);
                    setStreamHidden(false);
                }
                else if(dayCount >5){
                    alert("5 days limit exceeded!");
                    // go to deny
                    setAccessHidden(true);
                    setDenyHidden(false);
                }
                else if(logincount >5){
                    alert("5 login limit exceeded!");
                    // go to deny
                    setAccessHidden(true);
                    setDenyHidden(false);
                }
                else if(duration >45){
                    alert("45 mins duration limit exceeded!");
                    // go to deny
                    setAccessHidden(true);
                    setDenyHidden(false);
                }
            }
            else if(res.data.message === "failed"){
                setEmail("");
                setCode("");
                // go to access
                setAccessHidden(true);
                setAccessLinkHidden(false);
            }
            else if(res.data.message === "Invalid Code"){
                setEmail("");
                setCode("");
                // go to deny
                    setAccessHidden(true);
                    setDenyHidden(false);
            }
        });

        //storing data
        /*const collectData = async () => {
            console.warn("bahut jagah hai");

            //using fetch to store data
            let result = await fetch(uri, {
                method: 'post',
                body: JSON.stringify({email, code}),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            result = await result.json();
            console.warn(result);
        }*/

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
        <input type="email" className="info-input" placeholder="Email address" value={email} onChange={handleEmailChange}></input>
        <input type="text" className="info-input" placeholder="Personal Code" value={code} onChange={handleCodeChange}></input>
        <button className="register-button" onClick={ handleLogin }>Log in</button>
        {/* changed handleLogin with collectData */}
        </div>
        </div>
        </div>
        <div hidden={accessLinkHidden}><AccessLink code={code}/></div>
        <div hidden={denyHidden}><Deny /></div>
        <div hidden={streamHidden}><Stream duration={duration}/></div>
        </div>
    );
}

export default Access;