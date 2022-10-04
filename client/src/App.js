import React, { Component, useState } from 'react';
import './App.css';
import Home from "./Components/Home/home.jsx";


function App({language,setLanguage}){
  //usestate for changing state if we select english or bdifault language is english when state is true when some one click belgium 
//state changes and language changes state become false

  return(
    <div>
      <Home language={language} setLanguage={setLanguage} />
    </div>
  );
}

export {
  App
};