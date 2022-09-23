import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Register from "./Components/Register/register.jsx";
import Access from "./Components/Access/access.jsx";
import Link from "./Components/Link/link.jsx";
import Deny from "./Components/Deny/deny.jsx";
import Stream from './Components/Stream/stream.jsx';

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
         <Route path="/" element={
          <div>
          <App />
          </div>
        } />
        <Route path="/register" element={
          <div>
          <Register />
          </div>
        } />
        <Route path="/login" element={
          <div>
          <Access />
          </div>
        } />   
        <Route path="/stream" element={
          <div>
          "YOU ARE ON STREAM PAGE"
          <Stream />
          </div>
        } />  
        <Route path="/access-denied" element={
          <div>
          <Deny />
          </div>
        } />   
        <Route path="/access-link" element={
          <div>
          <Link />
          </div>
        } />        
      
      </Routes>
      {/* <Stream /> */}
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

