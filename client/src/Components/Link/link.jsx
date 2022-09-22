import axios from "axios";
import React from "react";
import "./link.css";

function Link(props){

    
    const [code ,setCode] = React.useState("");
    // console.log(props.value);
    const email = props.value;
    const condition = props.cond;
    if(condition === false){
    axios.post('/getcode',{
        Email: email
    }).then((res)=>{
        if(res.data.Message === "Success"){
            setCode(res.data.Code);
        }
        else if(res.data.Message === "failed"){
         alert("Error Occurred");
        }
    });}
    return(
        <div className="register-section">
        <div className="register-div">
        <div className="form-container" style={{margin:"auto", position:"relative", top:"50px"}}>
        <h3 style={{textAlign:"left",fontFamily:"sans-serif", margin:"0"}}>This is your link</h3>
        <p style={{textAlign:"left",fontFamily:"sans-serif", margin:"0"}}>
        <a href="www.samplelink.com">www.samplelink.com</a>
        </p>
        <br></br>
        <h3 style={{textAlign:"left",fontFamily:"sans-serif", margin:"0"}}>Your code is</h3>
        <p style={{textAlign:"left",fontFamily:"sans-serif", margin:"0"}}>{code}</p>
        </div>
        </div>
        </div>
    );
}

export default Link;