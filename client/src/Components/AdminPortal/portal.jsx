import React from "react";
import "./adminPortal.css";

export default function Portal() {
    return (
        <div className="admin-bg">
            <div className="admin-header">
                ADMIN PORTAL
            </div>
            <div className="admin">
            <div className="div-one">
                <div className="duration-set">
                   <span className="duration-set-span"> Set stream duration</span>
                   <span className="duration-set-span2"> (currently 5mins)</span>
                    <input type="text" className="divone-info-input" placeholder="Enter Duration(mins)" name="email"></input>
                    <button className="register-button-admin1">SET</button>
                </div>
                <div className="add-admin">
                <span className="duration-set-span"> Add admin</span>
                   
                    <input type="text" className="divone-info-input" placeholder="Username" name="email"></input>
                    <input type="text" className="divone-info-input" placeholder="Password" name="email"></input>
                    <button className="register-button-admin2">SET</button>
                </div>
        
            </div>
            <div className="div-two messages">
              <div className="div-two-minutes">
              <span className="div-span"> Total minutes used</span>
              <span className="div-span-number">   15</span>
               
              
              </div>
              <div className="div-two-minutesleft">
              <span className="div-span">Total minutes left</span>
              <span className="div-span-number">  3569</span>
              
               
              </div>
              <div className="div-two-changetotalbudget">
              <span className="duration-set-span"> Change total budget(mins)</span>
              <input type="text" className="divtwo-info-input" placeholder="New total budget(mins)" name="email"></input>
                    <button className="register-button-admin3">SET</button>
              </div>
            </div>
            <div className="div-three messages">
            <div className="div-three-minutes">
            <span className="div-span">Minutes used today</span>
              <span className="div-span-number">     12</span>
             
              </div>
              <div className="div-three-dailyBudget">
              
              <span className="div-span">Daily Budget(mins)</span>
              <span className="div-span-number">     3569</span>
               
              </div>
              <div className="div-three-changedailybudget">
              <span className="duration-set-span"> Change Daily budget(mins)</span>
              <input type="text" className="divthree-info-input" placeholder="New daily budget(mins)" name="email"></input>
                    <button className="register-button-admin">SET</button>
              </div>
            </div>
            </div>
        </div>
    );
}