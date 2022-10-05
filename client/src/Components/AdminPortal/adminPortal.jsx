import React from "react";
import Portal from "./portal.jsx";
import "./adminPortal.css";


function AdminPortal() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [portal, setPortal] = React.useState("");

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleAdminLogin() {
        if (username === "admin" && password === "12345") {
            alert("Login Success");
            setPortal(<Portal />);
            document.getElementById("form-container").style.display = "none";

        }
    }


    return (
        <div className="admin-auth">
            <div className="form-container" id="form-container">
                <h3 className="register-title">Admin Login</h3>
                <input type="text" className="info-input" placeholder="Username" value={username} name="email" onChange={handleUsernameChange}></input>
                <input type="text" className="info-input" placeholder="Password" value={password} onChange={handlePasswordChange}></input>
                <button className="register-button" onClick={handleAdminLogin}>Log in</button>
            </div>
            <div>
                {portal}
            </div>
        </div>
    );
}

export default AdminPortal;