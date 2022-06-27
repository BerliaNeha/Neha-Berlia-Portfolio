import React from 'react'
import "./contact.scss"
import { useState } from "react";


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h3>I’m a fullstack web developer with over a decade of experience in project management.</h3>
          
          <p>A historian turned developer who has worked with private companies as well as for renowned international government institutions to publish academic content and curate exhibitions, I believe in rich interactive websites that work across all platforms and devices.</p>

          <p>Although I'm familiar with using frameworks, I primarily hand-code using HTML5, CSS3, and JavaScript and put emphasis on browser support and performance.</p>

          <p>Feel free to send an e-mail on <a href="mailto:nehaberlia1@gmail.com">nehaberlia1@gmail.com</a></p>
      </div>
      <div className="right">
        <p>Alternatively, you can also drop-in a mail here!</p>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="MESSAGE"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>

        
      </div>
    </div>
  );
}