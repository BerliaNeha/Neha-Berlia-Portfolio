import React, {useRef, useState}from 'react'
import "./contact.scss"
import ContactForm from '../ContactForm.js';



 



 export default function Contact() {
  //const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
// const [isContactVisible, setIsContactVisible] = useState(true);

//  const handleContactVisibility =()=>{
//   setIsContactVisible (false);
//  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <h3>I’m a fullstack web developer with over a decade of experience in project management.</h3>

          <p>A historian turned developer who has worked with private companies as well as for renowned international government institutions to publish academic content and curate exhibitions, I believe in rich interactive websites that work across all platforms and devices.</p>

          <p>Although I'm familiar with using frameworks, I primarily hand-code using HTML5, CSS3, and JavaScript and put emphasis on browser support and performance. In my backend role, understanding the client-server paradigm and coding using architectural patterns such as MVC has been my focus.</p>

          <p>Feel free to send an e-mail on <a href="mailto:nehaberlia1@gmail.com">nehaberlia1@gmail.com</a></p>

          <p>https://github.com/BerliaNeha</p>
          <p>https://portfolio-neha-berlia.vercel.app//</p>
          <p>https://www.linkedin.com/in/neha-berlia-66b14554/</p>

    
      </div>
      <div className="right">
        
        <ContactForm />
      </div>
    </div>
  )}
