/* eslint-disable no-unused-vars */
import React ,{useContext,useState}from  "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Stream from '../Link/link.jsx';
import Stream2 from '../Link/linkswedish';
// import {State} from "../../../src/Routing"
export default async function Authenticate({language}){
  
    const [email, setEmail] = React.useState("");
    const [streaming, setStreaming] = React.useState();
    const params = useParams();
    const userCode = params.id;

    function updateLoginCount(email, logincount){
      const mail = email;
      const loginCount = logincount;
      const newLogincount = logincount + 1;
      axios.post(`${process.env.REACT_APP_API_URL}/updatelogincount`,{
          'Email': mail,
          'LoginCount': newLogincount
      }).then((res)=>{
          if(res.data.message === "Success") return "done";
          else return "fail";
      });
  }

  function deleteUser(email){
    const mail = email;
    axios.post(`${process.env.REACT_APP_API_URL}/deleteuser`,{
        'Email': mail
    }).then((res)=>{
        if(res.data.message === "Success") return "done";
        else return "fail";
    });
}
    
    axios.post(`${process.env.REACT_APP_API_URL}/getEmail`,{
      Code: userCode
    }).then((res)=>{
      // console.log(res.data.Message);
      if(res.data.Message === "OK"){
        updateLoginCount(res.data.Email, res.data.LoginCount);
        // setStreaming(<Stream />);
        window.location.replace('/stream');
      }
      else if(res.data.Message === "Login Limit Exceeded"){
        deleteUser(res.data.Email);
        alert(res.data.Message);
      }
      else{
        alert(res.data.Message);
      }
    });

      return(
        <div id="streamer">
      {streaming}
        </div>
      );
}