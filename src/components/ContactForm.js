import React from "react";
import { useForm, ValidationError } from "@formspree/react";
// import emailjs from '@emailjs/browser';
import { useState } from "react";

export default function ContactForm() {
  
  const [state, handleSubmit] = useForm("xoqybgnb");
  const [message, setMessage] = useState(false);
  
 
  // const updateMessage = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
 

  if (state.succeeded) {

    return (<span>Thanks, I'll reply ASAP :) </span>)
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <input id="name" type="text" name="name" placeholder="Name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input id="email" type="email" name="email" placeholder="Email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="MESSAGE"></textarea>
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Send
      </button>
      
    </form>
  );
  }
