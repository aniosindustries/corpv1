import React, { useState } from "react";
import domain from '../util/domain';
import axios from 'axios';





export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Send");

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageInput = (e) => {
    setMessage(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const data = {
      name,
      email,
      message,
    };

    try {
      let response = await axios.post(`${domain}/send`, data);
      console.log(response.status);
      if (response.status === 200) {
        setEmail("");
        setName("");
        setMessage("");
        setStatus("Send");
        alert(response.data)
      } else if (response.status !== 200) {
        setStatus("Send");
        alert("Message failed to send.");
      }
    } catch (error) {
      setStatus("Send");
      console.log(error);
      alert("Message failed to send.");
    }
  };
  return (
    
<>
<form className='upward-form' onSubmit={handleSubmit}>
<h3>Contact us using the form below. We will reach back out to you within 24 hours.</h3>
    <div className="container text-center">
    <div className='form-floating mb-3 w-100'>
  <input type="text" id='email' className="form-control" value={email} onChange={handleEmailInput} required/>
  <label htmlFor='email'>Email</label>
</div>
<div className='form-floating mb-3 w-100'>
  <input type="text" id='name' className="form-control" value={name} onChange={handleNameInput} required/>
  <label htmlFor="name">Name</label>
</div>
<div className='form-floating mb-3 w-100'>
  <textarea type="text" id='message' className="form-control" value={message} onChange={handleMessageInput} required/>
  <label htmlFor="message">Your message</label>
</div>
<button type='submit' className='btn btn-success w-50'>{status}</button>  
    </div>
</form>
</>
     
  
  );
}
