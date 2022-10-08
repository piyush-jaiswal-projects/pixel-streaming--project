import React ,{useState}from "react";
import "./home.css";
import {Link} from "react-router-dom";
// import {handleAccessClick} from "../../App.js";
import logo from "./logo.png";
import logo2 from "./logo2.png";
function Home({language,setLanguage}){
   
    const[s,setS]=useState(false);
  
    const change=(e)=>{
        if (e.target.value==="Swedish"){
            // console.log(language);
            setS(true)
            // console.log(s);
        }else{
            setS(false);
            
        }
        setLanguage(s);
        document.cookie="language="+s;
          console.log(`i am in home ${s}`);
       
    //     console.log(language);
    //   
    //    console.log(language);
    }
    return(
        <div className="home-section" id="centreDiv">
        <div className="check">
  <select  onChange={change} className="membership" id="membership">
  <option className="member-value" value="English">CHANGE LANGUAGE</option>
  <option className="member-value" value="Swedish" >SWEDISH</option>
</select>
  </div>
        <div className="home-div">
       
        

  
 
   { language? (<> {/* 1=English  */}
   <div  className="logo">
            <img  className="img" src={logo2} alt="" srcset="" />
        </div>
        <br />
        <hr></hr>
        <h3 className="section-title" onClick={change}>No Time to Waste</h3>
        <h3 className="t">Welcome to a virtual escape room experience from Håll Sverige Rent. Created to raise awareness and promote knowledge about the global plastic epidemic.</h3>
        <div className="btn-wrapper-div">
        <Link to="/register">
        <button className="section-button">REQUEST ACCESS</button>
        </Link>
        <Link to="/login">
        <button className="section-button">I HAVE A CODE</button>
        </Link>
        </div>
        <p className="footer-tag">Created by Interesting Time Gang</p>
        </>) 
        :<> {/* belgium*/}
        <div  className="logo">
            <img  className="img" src={logo2} alt="" srcset="" />
        </div>
        <br />
        <hr></hr>
        <h3 className="section-title" onClick={change}>Ingen tid att förlora </h3>
        <h3 className="t">Välkommen till en virtuell escape room-upplevelse från Håll Sverige Rent. Skapad för att öka medvetenheten och främja kunskap om den globala plastepidemin.</h3>
        <div className="btn-wrapper-div">
        <Link to="/register">
        <button className="section-button">BEGÄRA TILLGÅNG</button>
        </Link>
        <Link to="/login">
        <button className="section-button">JAG HAR EN KOD</button>
        </Link>
        </div>
        <p className="footer-tag">Skapad av Interesting Time Gang</p>
        </> }
        </div>
        
        </div>
    );
}

export default Home;