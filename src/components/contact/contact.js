import React from 'react'
import {useState} from 'react' 

function Contact() {
  const [formState, setFormState] = useState({name: '', email: '', message: ''});

  function handleSubmit(e) {
    e.preventDefault(); //makes sure form does not refresh page
    console.log(formState);
  }

  return (
  <div>
  <section className="page-section contact" id="contact">
    <h2>Contact Info</h2>
  <div> 

    <form onSubmit={(e) => {
        handleSubmit(e);
        }} className="contactForm">
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

      <address>
        <a href="tel:+19375806559">
          (937) 580-6559
        </a>
        <a href="mailto:tiffanyrengland@gmail.com">
          Tiffanyrengland@gmail.com </a>
          <a href="https://www.linkedin.com/in/tiffany-england-39374b55/" id="linkedin">
              LinkedIn
          </a>
          <a href="https://github.com/Trengland" id="github">
            GitHub
          </a>
      </address>

    </div>
  </section>
  </div>
  )
}

export default Contact