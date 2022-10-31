import React from "react";
import Portal from "./portal.jsx";
import axios from "axios";
import "./adminPortal.css";
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
    
        await axios.post('/adminlogin', { 
            'AdminUserName': username,
            'AdminPassWord': password
        }).then((res) => {
            if(res.data.message){
                alert("Login Success");
                setPortal( false);
                document.getElementById("form-container").style.display = "none";
                setValid(true);
              }
              else{
                alert("Invalid Login");
              }
        })
     
    
    }


    return (
        <div className="admin-auth">
          <h3 className="section-title2" >No Time to Waste is not compatible with mobile devices .Please visit this page on a computer instead</h3>
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