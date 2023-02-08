import React, { useEffect, useRef, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
const ContactMe = () => {

    const form = useRef();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [senderName, setSenderName] = useState("");

    const isEmpty = (email,message,senderName) => {
        if(email == "" || message == "" || senderName == "") {
            return true;
        }else {
            return false;
        }

    }
    console.log(isEmpty(email,message,senderName))

  const sendEmail = (e) => {
    e.preventDefault();

    if(isEmpty(email,message,senderName)){
        Swal.fire('All fields are required!')
    }else {
        emailjs.sendForm('service_kjtxamq', 'template_mqxk65n', form.current, 'lffY085PoTCOiL7gi')
      .then((result) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message has been sent!',
            showConfirmButton: false,
            timer: 1500
          })
          e.target.reset();
      }, (error) => {
        Swal.fire('Opps! Your message was not sent!')
        e.target.reset();
      });

    }

    
  };



  return (
    
        <Container>
        <h1 className='display-1 my-3 text-center'>Say Hi</h1>
        <div className='contact-form'>
        <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="from_email" onChange={(e) => {
            setEmail(e.target.value)
        console.log(email)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name"  name="from_name" onChange={(e) => {setSenderName(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Your Message</Form.Label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='message' onChange={(e) => {setMessage(e.target.value)}}></textarea>
    
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button> 
    </Form>
    </div>
        </Container>
        
      

  )
}

export default ContactMe
