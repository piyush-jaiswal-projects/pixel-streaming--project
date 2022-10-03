import React ,{useState}from "react";
import "./home.css";
import {Link} from "react-router-dom";
// import {handleAccessClick} from "../../App.js";
import logo from "./logo.png";
function Home({language,setLanguage}){
    const[s,setS]=useState(false);
    const change=(e)=>{
        if (e.target.value==="Belgium"){
            // console.log(language);
            setS(true)
            // console.log(s);
        }else{
            setS(false);
            
        }
        setLanguage(s);
    //     console.log(language);
    //   
    //    console.log(language);
    }
    return(
        <div className="home-section" id="centreDiv">
        <div className="home-div">
       
        <div className="check">
  <select  onChange={change}ClassName="membership" id="membership">
  <option  value="English">English</option>
  <option  value="Belgium" >Belgium</option>
</select>
  </div>
 
   { language? (<> {/* 1=English  */}
   <div  className="logo">
            <img  className="img" src={logo} alt="" srcset="" />
        </div>
      
        <h3 className="section-title" onClick={change}>Welcome to No Time to Waste</h3>
        <h3 className="t">Welcome to a virtual escape room experience from Håll Sverige Rent. Created to raise awareness and promote knowledge about the global plastic epidemic.</h3>
        <Link to="/register">
        <button className="section-button">Request Access</button>
        </Link>
        <Link to="/login">
        <button className="section-button">Login</button>
        </Link></>) 
        :<> {/* belgium*/}
        <div  className="logo">
            <img  className="img" src={logo} alt="" srcset="" />
        </div>
        <h3 className="section-title" onClick={change}>Welcome to No Time to Waste in Belgium </h3>
        <h3 className="t">Welcome to a virtual escape room experience from Håll Sverige Rent. Belgium Created to raise awareness and promote knowledge about the global plastic epidemic.</h3>
        <Link to="/register">
        <button className="section-button">Request Access</button>
        </Link>
        <Link to="/login">
        <button className="section-button">Login</button>
        </Link>
        </> }
    
        </div>
        </div>
    );
}

export default Home;