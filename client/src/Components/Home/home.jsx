import React from "react";
import Register from "../Register/register.jsx";
import ReactDOM from "react-dom";
import "./home.css";

function Home(){

    function handleAccessClick(){
        console.log("Working");
    }

    return(
        <div className="home-section">
        <div className="home-div">
        <h3 className="section-title">Welcome to No Time to Waste</h3>
        <button className="section-button" onClick={handleAccessClick()}>Request Access</button>
        <button className="section-button">Login</button>
        </div>
        </div>
    );
}

export default Home;