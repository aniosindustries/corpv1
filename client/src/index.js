import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './style/styles.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import UpwardLogin from "./components/UpwardLogin";
import Upward from "./components/Upward";
import Contact from "./components/Contact";
import axios from "axios";
import { UserContextProvider } from './context/UserContext';
import MessageSent from "./components/MessageSent";


axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projectupward' element={<UpwardLogin/>}/>
        <Route path='/upward' element={<Upward/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/messagesent' element={<MessageSent/>}/>
      </Routes>
    </Router>
    </UserContextProvider>
    <Footer/>
  </React.StrictMode>,
  document.getElementById("root")
);
