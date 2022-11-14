/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Access/access.css";
import axios from "axios";
// import updatelanguage from "../../../../controllers/updatelangage";

function Campaign({ language }) {

   
    // const [loginTitle, setLoginTitle] = useState("Enter your code");
    // const [loginTitleSwedish, setLoginTitleSwedish] = useState("Ange din kod");

    return (
        <div>
         <h3 className="section-title2" >No Time to Waste is not compatible with mobile devices .Please visit this page on a computer instead</h3>
          <div className="register-section">
                <div className="register-div1">
                    <Link to="/">
                        <button className="back">
                        <svg className="back-svg" version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                         preserveAspectRatio="xMidYMid meet">

                       <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                       <path d="M2058 4727 c-31 -13 -74 -38 -95 -55 -77 -62 -1882 -1878 -1907
-1920 -38 -61 -60 -154 -52 -225 14 -132 -40 -73 1014 -1129 795 -796 975
-971 1020 -994 78 -39 202 -46 285 -14 89 34 153 90 191 169 28 60 31 75 31
161 0 165 16 144 -562 729 -274 278 -534 536 -579 575 -45 40 -118 91 -167
116 l-86 45 1837 5 1837 5 57 23 c81 33 160 108 200 190 30 60 33 75 33 152
-1 70 -5 95 -27 142 -35 76 -99 143 -173 181 l-60 32 -1855 5 -1855 5 95 50
95 49 576 576 c665 664 634 624 634 795 0 89 -3 106 -28 156 -15 31 -50 78
-77 103 -72 68 -126 89 -235 93 -77 3 -98 0 -147 -20z"/>
</g>
</svg>
                        </button>
                    </Link>
                    <div className="form-container">
                        <h3 className=" daily">Maximum Number of<br /> sessions  exceeded.</h3>
                        <h3 className=" daily1">No Time to Waste was available for a limited<br/> time and is  unfortunately no longer available </h3>
                       
                      
                    </div>
                </div>
            </div> 
                    </div>
            
    );
}

export default Campaign;