import React from "react";
import "./home.css";
import {Link} from "react-router-dom";
// import {handleAccessClick} from "../../App.js";

function Home(){

    return(
        <div className="home-section" id="centreDiv">
        <div className="home-div">
        <h3 className="section-title">Welcome to No Time to Waste</h3>
        <Link to="/register">
        <button className="section-button">Request Access</button>
        </Link>
        <Link to="/login">
        <button className="section-button">Login</button>
        </Link>
        </div>
        </div>
    );
}

export default Home;