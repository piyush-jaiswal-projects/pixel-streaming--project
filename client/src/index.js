import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './Routing';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useEffect ,useState} from "react";
import { useLocation } from "react-router";
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
    <Routing />
     
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

