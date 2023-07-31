import React from 'react';
import './style.css';
import resume from '../../images/icon-256x256.jpg';

function Resume() {
  const resumeUrl = 'https://docs.google.com/document/d/1HBI5CIlyqa3DUOjmyjcGz5Um0SZGufHfpi0wl4p6W1M/edit?usp=sharing';

  return (
    <div id="resume">
      <h2>My Resume</h2>
      <br />
      <a href={resumeUrl} target="_blank" rel="noreferrer">
        <img id="resumeImg" src={resume} alt="Resume" />
      </a>
      <br />
      <br />
      <h3>I appreciate your interest in my work! Please feel free to reach out with any questions, thoughts, ideas, etc.</h3>
    </div>
  );
}

export default Resume;

