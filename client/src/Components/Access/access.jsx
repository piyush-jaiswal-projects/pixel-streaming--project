import React, {useState} from "react";
import "./access.css";
import axios from "axios";

function Access(){

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

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

    function handleLogin(){
        axios.post('/login', {
            'Email': email,
            'Code': code
        }).then((res) => {
            alert(res.data.message);
            if(res.data.message === "Success"){
                const registerDate = res.data.RegisterDate;
                const todayDate = new Date();
                var Difference_In_Time = registerDate.getTime() - todayDate.getTime();
                const dayCount = Difference_In_Time / (1000 * 3600 * 24);
                const logincount = res.data.LoginCount;
                const duration = res.data.Duration;
                const result = updateLoginCount(email, logincount);
                if(dayCount <= 5 && logincount <= 5 && duration <= 45 && result === "done"){
                    // Go to stream and pass duration as props
                    alert("Go to stream");
                }
                else if(dayCount >5){
                    alert("5 days limit exceeded!");
                    // go to deny
                }
                else if(logincount >5){
                    alert("5 login limit exceeded!");
                    // go to deny
                }
                else if(duration >45){
                    alert("45 mins duration limit exceeded!");
                    // go to deny
                }
            }
            else if(res.data.message === "failed"){
                setEmail("");
                setCode("");
                // go to access
            }
            else if(res.data.message === "Invalid Code"){
                setEmail("");
                setCode("");
                // go to deny
            }
        });
    }

    return(
        <div className="register-section">
        <div className="register-div">
        <button className="back"><img src="./images/back.png" className="back-image" alt="Back"></img></button>
        <div className="form-container">
        <h3 className="register-title">Access Experience</h3>
        <input type="email" className="info-input" placeholder="Email address" value={email} onChange={handleEmailChange}></input>
        <input type="text" className="info-input" placeholder="Personal Code" value={code} onChange={handleCodeChange}></input>
        <button className="register-button" onClick={handleLogin}>Log in</button>
        </div>
        </div>
        </div>
    );
}

export default Access;