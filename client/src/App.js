import React, { Component, useState } from 'react';
import './App.css';
import Home from "./Components/Home/home.jsx";
import Register from "./Components/Register/register.jsx";
import Access from "./Components/Access/access.jsx";
import Link from "./Components/Link/link.jsx";
import Deny from "./Components/Deny/deny.jsx";
// import axios from 'axios'



function App(){

  const [component, setComponent] = useState(<Register />);

  return(
    <div>
      {component}
    </div>
  );
}

export {
  App
};