import React from 'react'
import {useState} from 'react' 
import './style.css'

function Contact() {
  const [formState, setFormState] = useState({name: '', email: '', message: ''});

  function handleSubmit(e) {
    e.preventDefault(); //makes sure form does not refresh page
    console.log(formState);
  }

  return (
  <div>
  <section className="contact-info">
    <h2>Contact Info</h2>

  <div id="address"> 
    <address>
        Give me a call to discuss a project or opportunity: <a href="tel:+19375806559">
          (937) 580-6559
        </a>
<br></br>
        Send me an email, I will get back with you ASAP: <a href="mailto:tiffanyrengland@gmail.com">
          Tiffanyrengland@gmail.com </a>
<br></br>
          Check out my LinkedIn Profile to view my work history, references and skills: <a href="https://www.linkedin.com/in/tiffany-england-39374b55/" id="linkedin">
              LinkedIn
          </a>
<br></br>
          Visit my GitHub profile to see my past, present and future projects: <a href="https://github.com/Trengland" id="github">
            GitHub
          </a>
    </address>
  </div>
  </section>
<br></br>
<br></br>
  <form id="form" onSubmit={(e) => {
        handleSubmit(e);
        }}>
<br></br>
<br></br>
        <h3>Send me a message! I'll get back with you ASAP.</h3>
        <label> Name </label>
        <input onChange={(e) => {
          setFormState({...formState, name: e.target.value})
        }} type="text" id="name" name="name" placeholder="Your Name" />

        <label> Email </label>
        <input onChange={(e) => {
          setFormState({...formState, email: e.target.value})
        }} type="email" id="email" name="email" placeholder="Your Email" />

        <label> Message </label>
        <textarea onChange={(e) => {
          setFormState({...formState, message: e.target.value})
        }} id="message" name="message" placeholder="Your Message"></textarea>

        <button type="submit">Submit</button>
     </form>
     <br></br>
     <br></br>
  </div>
  )}

export default Contact