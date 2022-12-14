import React from "react";
import {Link} from "react-router-dom";

function Deny({language}){
    return(
        <div className="register-section">
        {language?  <div className="register-div">
        <div className="form-container" style={{margin:"auto", position:"relative", top:"50px"}}>
        <p style={{textAlign:"left",fontFamily:"sans-serif", margin:"0", fontWeight:"bold", color:"#FFFFFF"}}>
            You have watched stream for 45 minutes. To continue watching, please login again.
        </p>
        <br></br>
        <Link to='/login'>
        <button className="register-button">LOG IN AGAIN</button>
        </Link>
        </div>
        </div>:<>
        {/* belgium */}
        <div className="register-div">
        <div className="form-container" style={{margin:"auto", position:"relative", top:"50px"}}>
        <p style={{textAlign:"left",fontFamily:"sans-serif", margin:"0", fontWeight:"bold", color:"#FFFFFF"}}>
        Du har tittat på stream i 45 minuter. Logga in igen för att fortsätta titta.
        </p>
        <br></br>
        <Link to='/login'>
        <button className="register-button">LOGGA IN IGEN</button>
        </Link>
        </div>
        </div>
        </>}
      
        </div>
    );
}

export default Deny;