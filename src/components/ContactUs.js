import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import emailjs from '@emailjs/browser';


const ContactUs=()=> {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6hcmybv', 'template_iqmuuku', form.current, 'tAz-lu9VPP0V4xVYx')
      .then((result) => {

        if(result){
            alert("thank you for your valuable feedback")
          }else{
            alert("feedback not submited Please try again, thank you")
          }

          window.location.reload();

          console.log(result.text);

      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
    <>
       <Container>
            <form className='text-center' ref={form} onSubmit={sendEmail}>
                <input className='form-control' type='text' name='user_name' placeholder='Name'/> <br/>
                <input className='form-control' type='email' name='user_email' placeholder='Email'/> <br/>
                <textarea className='form-control' rows={5} name='message' placeholder='message'/> <br/>
                <input className='btn btn-primary w-75' type='submit' value='send' />
            </form>
       </Container>
    </>
  )
}

export default ContactUs