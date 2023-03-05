import React, { useState } from "react";
import { init, send } from 'emailjs-com';
import {useNavigate} from 'react-router-dom';


init("user_aVYjm0EyJd5tmVUPL2ulP");



export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
  });
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_uvfabt7',
      'template_of2kh2g',
      toSend,
      'user_aVYjm0EyJd5tmVUPL2ulP'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        navigate('/messageSent');
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    
<>
<form className='upward-form' onSubmit={onSubmit}>
<h3>Contact us using the form below. We will reach back out to you within 24 hours.</h3>
    <div className="container text-center">
    <div className='form-floating mb-3 w-100'>
  <input type="text" name='from_name' className="form-control" value={toSend.from_name} onChange={handleChange}/>
  <label htmlFor='from_name'>Email</label>
</div>
<div className='form-floating mb-3 w-100'>
  <input type="text" name='to_name' className="form-control" value={toSend.to_name} onChange={handleChange}/>
  <label htmlFor="form-label">Name</label>
</div>
<div className='form-floating mb-3 w-100'>
  <textarea type="text" name='message' className="form-control" value={toSend.message} onChange={handleChange}/>
  <label htmlFor="form-label">Your message</label>
</div>
<button type='submit' className='btn btn-success w-50'>Send</button>  
    </div>
</form>
</>
     
  
  );
}
