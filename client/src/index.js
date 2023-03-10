import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './style/styles.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Upward from "./components/Upward";
import Contact from "./components/Contact";

import MessageSent from "./components/MessageSent";




ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/upward' element={<Upward/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/messagesent' element={<MessageSent/>}/>
      </Routes>
    </Router>

    <Footer/>
  </React.StrictMode>,
  document.getElementById("root")
);
