import React, { useState } from 'react';
import './style.css';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // prevents form from refreshing the page

    // Check if name field is empty
    if (!formState.name) {
      setNameError('Name is required');
    } else {
      setNameError(''); // Clear the error if name field is not empty
    }

    // Check if email field is empty
    if (!formState.email) {
      setEmailError('Email is required');
    } else {
      setEmailError(''); // Clear the error if email field is not empty
    }

    // Check if message field is empty
    if (!formState.message) {
      setMessageError('Message is required');
    } else {
      setMessageError(''); // Clear the error if message field is not empty
    }

    // Submit the form only if all fields are non-empty
    if (formState.name && formState.email && formState.message) {
      console.log(formState);
    }
  }

  const handleFieldBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value.trim();

    if (!fieldValue) {
      alert(`${fieldName} is required`);
    }
  };

  return (
    <div>
      <section className="contact-info">
        <h2>Contact Info</h2>

        <div id="address">
          <address>
            Give me a call to discuss a project or opportunity:{' '}
            <a href="tel:+19375806559">(937) 580-6559</a>
            <br />
            Send me an email, I will get back with you ASAP:{' '}
            <a href="mailto:tiffanyrengland@gmail.com">Tiffanyrengland@gmail.com</a>
            <br />
            Check out my LinkedIn Profile to view my work history, references, and skills:{' '}
            <a href="https://www.linkedin.com/in/tiffany-england-39374b55/" id="linkedin">
              LinkedIn
            </a>
            <br />
            Visit my GitHub profile to see my past, present, and future projects:{' '}
            <a href="https://github.com/Trengland" id="github">
              GitHub
            </a>
          </address>
        </div>
      </section>

      {/* <form
        id="form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h3>Send me a message! I'll get back with you ASAP.</h3>
        <label> Name </label>
        <input
          onChange={(e) => {
            setFormState({ ...formState, name: e.target.value });
          }}
          onBlur={handleFieldBlur}
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
        />
        {nameError && <p className="error">{nameError}</p>}

        <label> Email </label>
        <input
          onChange={(e) => {
            setFormState({ ...formState, email: e.target.value });
          }}
          onBlur={handleFieldBlur}
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
        />
        {emailError && <p className="error">{emailError}</p>}

        <label> Message </label>
        <textarea
          onChange={(e) => {
            setFormState({ ...formState, message: e.target.value });
          }}
          onBlur={handleFieldBlur}
          id="message"
          name="message"
          placeholder="Your Message"
        />
        {messageError && <p className="error">{messageError}</p>}

        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}

export default Contact;
