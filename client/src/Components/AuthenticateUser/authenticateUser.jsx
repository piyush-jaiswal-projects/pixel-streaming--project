/* eslint-disable no-unused-vars */
import React ,{useContext,useState}from  "react";
import axios from 'axios';
import Stream from '../Link/link.jsx';
import Stream2 from '../Link/linkswedish';
// import {State} from "../../../src/Routing"
export default function Authenticate({language}){
  
  
    const [streaming, setStreaming] = React.useState("");
   
    console.log(`i am in dhdhshddhshdh ${language}`);
    // if(language==false){
    //   setLa(false);
    //   console.log(`i am in laaaaa ${la}`);
    // }
  
    // console.log(`i am in laaaaa ${la}`);
// setLa(context);
// console.log(`i am inauth state ${la}`)
// console.log(`i am inauth state ${context}`);
    function updateLoginCount(email, logincount){
      const mail = email;
      const loginCount = logincount;
      const newLogincount = logincount + 1;
      axios.post('/updatelogincount',{
          'Email': mail,
          'LoginCount': newLogincount
      }).then((res)=>{
          if(res.data.message === "Success") return "done";
          else return "fail";
      });
  }

  function deleteUser(email){
    const mail = email;
    axios.post('/deleteuser',{
        'Email': mail
    }).then((res)=>{
        if(res.data.message === "Success") return "done";
        else return "fail";
    });
}

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      const email = getCookie("email");
      console.log("Email from cookie: "+email);

      // window.onbeforeunload = confirmExit;
// function confirmExit(){
//     axios.post('/updateduration2',{
//                 Email: email
//             }).then((res)=>{
//                 if(res.data.Message === "Success"){
//                     console.log("Stream Closed");
//                     alert("Stream Closed !!!");
//                 }
//                 else{
//                     alert("Error Occurred");
//                 }
//             });
//     return "Want to leave page ?";
// }
const standing = "standing";
React.useEffect(()=>{
  
  // if(email === "" || email === " "){
  //   alert("Email Not Found OR LOGIN Again");
  //   window.location.replace('/login');
  // }
  // else{
  //   axios.post('/checkuser', {
  //       'Email': email
  //   }).then((res) => {
  //       if(res.data.Message === "Success"){
  //       // rendering stream component
  //       const stat = updateLoginCount(email, res.data.LoginCount);
  //       setStreaming(<Stream />);
  //       }
  //       else if(res.data.Message === "No"){
  //           alert("You are not registered");
  //           window.location.replace('/register');
  //       }
  //       else if(res.data.Message === "10 Login Limit Exceeded"){
  //         deleteUser(email);
  //         alert("10 Login Limit Exceeded");
  //         window.location.replace('/register');
  //     }
  //       else{
  //           alert("ERROR OCCURRED");
  //           window.location.replace('/');
  //       }
  //   });
  // }
},[standing])
      

      return(
        <div id="streamer">
        {language ?  <Stream />: <Stream2 />}
      
        </div>
      );
}