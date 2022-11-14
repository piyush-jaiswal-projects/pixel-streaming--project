import React from "react";
import Portal from "./portal.jsx";
import axios from "axios";
import "./adminPortal.css";
import Mobileview from "../Home/mobileview"
const inEmail = document.getElementById("in-email");

function AdminPortal() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [portal, setPortal] = React.useState(true);
    const [valid, setValid] = React.useState(false);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    const handleAdminLogin=async(res)=> {
    
         axios.post('/adminlogin', { 
            'AdminUserName': username,
            'AdminPassWord': password
        }).then((res) => {
          console.log(res.data.message);
            if(res.data.message){
                console.log("me yha tha ")
                alert("Login Success");
                setPortal( false);
                document.getElementById("form-container").style.display = "none";
                setValid(true);
              }
              else if(!res.data.message){
                alert("Invalid login");
              }
            
        })

     
    
    }


    return (
        <div className="admin-auth">
          <Mobileview />
        {portal ?  <div className="form-container-auth" >
                <h3 className="register-title">Admin Login</h3>
                <input type="text" id="in-email" className="info-input-auth" placeholder="Username" value={username} name="email" onChange={handleUsernameChange}></input>
                <input type="text" id="in-email"  className="info-input-auth" placeholder="Password" value={password} onChange={handlePasswordChange}></input>
                <button className="register-button-auth" onClick={handleAdminLogin}>Log in</button>
            </div> 
            : <div>
                <Portal />
            </div>}
           
           
           
        </div>
    );
}

export default AdminPortal;