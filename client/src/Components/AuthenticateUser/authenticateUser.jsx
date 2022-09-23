import React from  "react";
import axios from 'axios';
import Stream from '../Stream/stream.jsx';

export default function Authenticate(){

    const [streaming, setStreaming] = React.useState("Initial Streaming Option");

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

      window.onbeforeunload = confirmExit;
function confirmExit(){
    axios.post('/updateduration2',{
                Email: email
            }).then((res)=>{
                if(res.data.Message === "Success"){
                    console.log("Stream Closed");
                    alert("Stream Closed !!!");
                }
                else{
                    alert("Error Occurred");
                }
            });
    return "Want to leave page ?";
}

      if(email === "" || email === " "){
        alert("Email Not Found OR LOGIN Again");
        window.location.replace('/login');
      }
      else{
        axios.post('/checkuser', {
            'Email': email
        }).then((res) => {
            if(res.data.Message === "Success"){
            // rendering stream component
            setStreaming(<Stream />);
            }
            else if(res.data.Message === "No"){
                alert("You are not registered");
                window.location.replace('/register');
            }
            else{
                alert("ERROR OCCURRED");
                window.location.replace('/');
            }
        });
      }

      return(
        <div id="streamer">
        {streaming}
        </div>
      );
}