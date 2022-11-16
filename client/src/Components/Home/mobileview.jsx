import React ,{useState}from "react";
import "./mobileview.css";
import {Link} from "react-router-dom";
import logo2 from "./logo2.png";
import image from "./logo.svg";
import "./home.css";
function mobileview(){

    return(
        
        <div className="home-section-mobile" id="centreDiv">
        <div className="home-div-mobile">
   <div  className="logo-mobile">
            <img  className="img-mobile" src={logo2} alt="" srcset="" />
        </div>
        <br />
        <hr></hr>
        <h3 className="section-title-mobile " >No Time to Waste</h3>
       
        <h3 className="t-mobile">This experience is not optimised for<br /> mobile devices.</h3>
        <h3 className="t-mobile">Please visit this website on a <br /> computer instead .</h3>
        <div  className="logo">
            <img  className="img-svg" src={image} alt="" srcset="" />
        </div>
        <p className="footer-tag-mobile">Created by Interesting Time Gang</p>
        </div>
        </div>
        
    );
}

export default mobileview;