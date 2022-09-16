import React from "react";
import Register from "../Register/register.jsx";
import ReactDOM from "react-dom";
import "./home.css";
// import {handleAccessClick} from "../../App.js";

function Home(){

    return(
        <div className="home-section">
        <div className="home-div">
        <h3 className="section-title">Welcome to No Time to Waste</h3>
        <button className="section-button">Request Access</button>
        <button className="section-button">Login</button>
        </div>
        </div>
    );
}

export default Home;