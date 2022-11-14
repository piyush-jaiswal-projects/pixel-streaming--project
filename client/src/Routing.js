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
import Session from './Components/errors/session';
import Campaign from './Components/errors/Campaign';
import Dailysessionexceed from './Components/errors/dailysessionexceed';
const State =createContext()
const Routing = () => {

    const [language,setLanguage]=useState(true);

  return (
   
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
        <Route path="/session" element={
          <div>
           <Dailysessionexceed />
        
          </div>
        } />  
        <Route path="/campaign" element={
          <div>
          <Campaign />
          </div>
        } />  
        <Route path="/dailysessionexceed" element={
          <div>
           <Session />
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
 
  )
}

export default Routing
export{State}