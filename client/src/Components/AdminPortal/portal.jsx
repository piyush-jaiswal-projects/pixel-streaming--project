import React ,{useEffect,useState} from "react";
import "./adminPortal.css";
import axios from "axios";
var validator = require("email-validator");
export default function Portal() {
    const [tmut, setTmut]= useState("");
    const [ttmb, setTtmb]= useState();
    const [tmb, setTmb]= useState();
    const [tmu, setTmu]= useState();
    const [duration, setDuration]= useState("");
    const [sd, setSd]= useState();
    const [userName ,setUserName]= useState("Username")
    const [password ,setPassword]= useState("Password")
    const [tbudget ,setTBudget]= useState();
    const [db ,setDB]= useState();
    const inEmail = document.getElementById("in-email");
    const handledurationset=(e)=>{
        setDuration(e.target.value)
    }
    
    // console.log(password);
    // console.log(userName);
    // console.log(ttmb);
    const getData = async() =>{
        try{
            const res = await fetch("/getTodaysTotalMinutesUsed",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const TMUT =await res.json();
            setTmut(JSON.stringify(TMUT .TotalMinutesUsedToday));
            // console.log(`i am inuseeffect ${JSON.stringify(TMUT .TotalMinutesUsedToday)}`);
            if(!res.status===200){
                const error =new Error(res.error);
                throw error;
            } }catch(e){
                console.log(e)
            }
       
    }
  
    const getTTMB = async() =>{
        try{
            const res = await fetch("/getTodaysTotalMinutesBudget",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const TTMB =await res.json();
           
           console.log(`i am in ttmb ${setTtmb(JSON.stringify(TTMB.TotalMinutesBudgetToday))}` )
         
          
            // console.log(`i am in  TTMB effect ${TTMB.TotalMinutesBudgetToday}`);
           
            if(!res.status===200){
                const error =new Error(res.error);
                throw error;
            } }catch(e){
                console.log(e)
            }
       
    }
   
    const getTMB = async() =>{
        try{
            /*** getTotalMinutesBudget*/
            const res = await fetch("/getTotalMinutesBudget",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const TMB =await res.json();
            setTmb(JSON.stringify(TMB.TotalMinutesBudget));
            /*** */
            // console.log(`i am in  effect ${TTMB.TotalMinutesBudgetToday}`);
            if(!res.status===200){
                const error =new Error(res.error);
                throw error;
            } }catch(e){
                console.log(e)
            }
       
    }
    const getTMU= async() =>{
        try{
            const res = await fetch("/getTotalMinutesUsed",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const TMU =await res.json();
            setTmu(JSON.stringify(TMU.TotalMinutesUsed));
            /*** */
            console.log(`i am in  effect ${TMU.TotalMinutesUsed}`);
            if(!res.status===200){
                const error =new Error(res.error);
                throw error;
            } }catch(e){
                console.log(e)
            }
       
    }
    const getSD = async() =>{
        try{
            const res = await fetch("/getStreamDuration",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const SD =await res.json();
            setSd(SD.StreamDuration);
            /*** */
            console.log(`i am in  sd effect ${JSON.stringify(SD)}`);
            if(!res.status===200){
                const error =new Error(res.error);
                throw error;
            } }catch(e){
                console.log(e)
            }
       
    }
    useEffect(() => {
      getData()
      getTTMB()
      getTMB()
      getTMU()
      getSD()
    }, [])
 
 const setAdmin=()=>{
    console.log(userName+password);
    if (validator.validate(userName)) {
    axios.post('/setNewAdmin', { 
        'AdminUserName': userName,
        'AdminPassWord': password
    }).then((res) => {
        // console.log(res.b);
        alert(res.data.Message);       
    })

    } else {
        // setTitle("none");
        // setInvalid("none");
        // // setEmailError("block");
        // rBtn.style.backgroundColor = "red";
        inEmail.style.color = "red";
        inEmail.style.borderColor = "red";
        window.alert("Email is invalid")
    }
    
 }
 
    const setStreamDuration=()=> {
        axios.post('/setStreamDuration', { 
        'User': "Admin",
        'StreamDuration': duration
    }).then((res) => {
        if (res.data.Message === "Duration Update Success") {
            alert("Stream Duration Update Success");
            setSd(duration);
        }       
        else{
            alert("Stream Duration Update Failed");
        }
      
       
    });}
    const setTotalMinutesBudget=()=> {
        axios.post('/setTotalMinutesBudget', {  
            "newCampaignBudget":tbudget,
            "User":"Admin"
        
    }).then((res) => {
        console.log(res);
        if (res.data.Message === "Success"){
            alert("Success");
            setTmb(tbudget);
        }
       
        else {
            alert("Failed");
        }
      
       
    });}
    const TodaysTMB=()=> {
        axios.post('/setTodaysTotalMinutesBudget', {  
            "newDailyBudget":db,
            "User":"Admin"
        
    }).then((res) => {
        console.log(res);
        if (res.data.Message === "Success"){
            setTtmb(db);
            alert("Success");
        }
       
        else {
            alert("Failed");
        }
      
       
    });}
    // setNewAdmin
   

    return (
        <div className="admin-bg">
          <h3 className="section-title2" >No Time to Waste is not compatible with mobile devices .Please visit this page on a computer instead</h3>
            <div className="admin-header">
                ADMIN PORTAL
            </div>
            <div className="admin">
            <div className="div-one">
                <div className="duration-set">
                   <span className="duration-set-span"> Set stream duration</span>
                   <span className="duration-set-span2"> (currently {sd} mins)</span>
                    <input type="text" className="divone-info-input" placeholder="Enter Duration(mins)" onChange={handledurationset} name="email"></input>
                    <button className="register-button-admin1" onClick={setStreamDuration}>SET</button>
                </div>
                <div className="add-admin">
                <span className="duration-set-span"> Add admin</span>
                   
                    <input type="email"  id="in-email" className="divone-info-input"  onChange={(e)=>setUserName(e.target.value)} placeholder={userName} name="email"></input>
                    <input type="text" className="divone-info-input" onChange={(e)=>setPassword(e.target.value)} placeholder={password} name="Password"></input>
                    <button className="register-button-admin2" onClick={setAdmin} >SET</button>
                </div>
        
            </div>
            <div className="div-two messages">
              <div className="div-two-minutes">
              <span className="div-span"> Total minutes used</span>
              <span className="div-span-number">   {(tmu/60).toFixed(2)} </span>
               
              
              </div>
              <div className="div-two-minutesleft">
              <span className="div-span">Total minutes left</span>
              <span className="div-span-number">  {(tmb-(tmu/60)).toFixed(2)}</span>
              
               
              </div>
              <div className="div-two-changetotalbudget">
              <span className="duration-set-span"> Change total budget(mins)</span>
              <input type="text" className="divtwo-info-input" placeholder="New total budget(mins)" name="tbudget" onChange={(e)=>setTBudget(e.target.value)}></input>
                    <button className="register-button-admin3" onClick={setTotalMinutesBudget}>SET</button>
              </div>
            </div>
            <div className="div-three messages">
            <div className="div-three-minutes">
            <span className="div-span">Minutes used today</span>
              <span className="div-span-number">{(tmut/60).toFixed(2)}</span>
             
              </div>
              <div className="div-three-dailyBudget">
              
              <span className="div-span">Daily Budget(mins)</span>
              <span className="div-span-number"> {(ttmb-(tmut/60)).toFixed(2)} </span>
               
              </div>
              <div className="div-three-changedailybudget">
              <span className="duration-set-span"> Change Daily budget(mins)</span>
              <input type="text" className="divthree-info-input" placeholder="New daily budget(mins)" onChange={(e)=>setDB(e.target.value)} name="email"></input>
                    <button className="register-button-admin" onClick={TodaysTMB}>SET</button>
              </div>
            </div>
            </div>
        </div>
    );
}