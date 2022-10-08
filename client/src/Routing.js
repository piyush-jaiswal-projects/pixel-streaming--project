import React from 'react'
import {App} from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useEffect ,useState,createContext} from "react";
import { useLocation } from "react-router";
import Register from "./Components/Register/register.jsx";
import Access from "./Components/Access/access.jsx";
import Link from "./Components/Link/link.jsx";
import LinkSwed from "./Components/LinkSwed/link.jsx";
import Deny from "./Components/Deny/deny.jsx";
import End from "./Components/End/end.jsx";
import AdminPortal from "./Components/AdminPortal/adminPortal.jsx";
import AuthenticateUser from "./Components/AuthenticateUser/authenticateUser.jsx";
import ScreenTwo from "./Components/ScreenTwo/screentwo.jsx";
const State =createContext()
const Routing = () => {

    const [language,setLanguage]=useState(true);
    console.log(language);

  return (
    <State.Provider value={language}> 
    <>
         <Routes>
         <Route path="/" element={
          <div>
          <App language={language} setLanguage={setLanguage} />
          </div>
        } />
        <Route path="/register" element={
          <div>
          <Register language={language} setLanguage={setLanguage}/>
          </div>
        } />
        <Route path="/login" element={
          <div>
          <Access language={language} setLanguage={setLanguage}/>
          </div>
        } />   
        
        <Route path="/stream" element={
          <div>
          <Link  language={language} setLanguage={setLanguage}/>
          </div>
        } />  

<Route path="/streamswed" element={
          <div>
          <LinkSwed  language={language} setLanguage={setLanguage}/>
          </div>
        } />
        
        <Route path="/access-denied" element={
          <div>
          <Deny language={language} setLanguage={setLanguage}/>
          </div>
        } />   
        <Route path="/access-link/:id" element={
          <div>
          <AuthenticateUser language={language} setLanguage={setLanguage} />
          </div>
        } />        
      <Route path="/end" element={
          <div>
          <End language={language} setLanguage={setLanguage}/>
          </div>
        } /> 
        <Route path="/admin" element={
          <div>
          <AdminPortal  language={language} setLanguage={setLanguage}/>
          </div>
        } />
        <Route path="/screentwo" element={
          <div>
          <ScreenTwo  language={language} setLanguage={setLanguage}/>
          </div>
        } />
      </Routes>
    </>
    </State.Provider>
  )
}

export default Routing
export{State}