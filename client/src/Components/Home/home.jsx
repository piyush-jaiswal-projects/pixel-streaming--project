import React ,{useState}from "react";
import "./home.css";
import {Link} from "react-router-dom";
// import {handleAccessClick} from "../../App.js";
import logo from "./logo.png";
import logo2 from "./logo2.png";
import image from "./logo.svg";
import Mobileview from "../Home/mobileview"
function Home({language,setLanguage}){
   
    const [lang, setLang] = useState("CHANGE LANGUAGE");
  
    const change=(e)=>{
        if (e.target.value==="Swedish"){
            // console.log(language);
            setLanguage(false);
            setLang("ENGLISH");
        }
       else if (e.target.value==="English"){
            setLanguage(true);
            setLang("CHANGE LANGUAGE");
        } 
    }
    return(
        <> <Mobileview />
        <div className="home-section" id="centreDiv">
        <div className="check">
  <select  onChange={change} className="membership" id="membership">
  <option className="member-value" value="English">{lang}</option>
  <option className="member-value" value="Swedish" >SWEDISH</option>
</select>
  </div>
        <div className="home-div">
   { language? (<> 
   <div  className="logo">
            <img  className="img" src={logo2} alt="" srcset="" />
        </div>
        <br />
        <hr></hr>
        <h3 className="section-title" onClick={change}>No Time to Waste</h3>
       
        <h3 className="t">Welcome to a virtual escape room experience from Keep <br />Sweden Tidy. Created to raise awareness and promote  <br /> knowledge about the global plastic epidemic.</h3>
        <div className="btn-wrapper-div">
        <Link to="/register">
        <button className="section-button">REQUEST ACCESS</button>
        </Link>
        <Link to="/login">
        <button className="section-button">I HAVE A CODE</button>
        </Link>
        </div>
       <div className="logo-div">
       <div  className="logo">
            <img  className="img-svg" src={image} alt="" srcset="" />
        </div>
        <p className="footer-tag">Created by Interesting Time Gang</p>
        <p className="footer-tag1"><a href=" https://hsr.se/privacy-policy" >READ MORE ABOUT OUR PRIVACY POLICY </a></p>
       </div>
       
        </>) 
        :<> {/* belgium*/}
        <div  className="logo">
            <img  className="img" src={logo2} alt="" srcset="" />
        </div>
        <br />
        <hr></hr>
        <h3 className="section-title" onClick={change}>No Time to Waste</h3>
        <h3 className="t">Välkommen till en virtuell escape room-upplevelse från Håll  <br />Sverige Rent. Skapad för att öka medvetenheten och främja <br /> kunskap om den globala plastepidemin</h3>
        <div className="btn-wrapper-div">
        <Link to="/register">
        <button className="section-button">BEGÄR <span></span> ÅTKOMST</button>
        </Link>
        <Link to="/login">
        <button className="section-button">JAG HAR EN KOD</button>
        </Link>
        </div>
        <div  className="logo">
            <img  className="img-svg" src={image} alt="" srcset="" />
        </div>
        <p className="footer-tag">Skapad av Interesting Time Gang</p>
        <p className="footer-tag1"><a href=" https://hsr.se/personuppgiftspolicy" >LAS GARNA MER OM HUR VI HANTERAR PERSONUPPGIFTER I VÅR PERSONUPPGIFTSPOLICY. </a></p>
        </> }
        </div>
        
        </div>
        </>
    );
}

export default Home;