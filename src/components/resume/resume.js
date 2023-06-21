import React from 'react'
import './style.css'
import resume from '../../images/icon-256x256.jpg'


function Resume() {
  return (
    <div id="resume" >
      <h2>My Resume</h2>
      <br></br>
    <a rel="noreferrer" target="_blank">
      <img id="resumeImg" src={resume}/>
      <br></br>
      <br></br>
      </a>
      <br></br>
      <h3>I appreciate your interest in my work! Please feel free to reach out with any questions,thoughts,ideas,etc.</h3>
    </div>
  )
}

export default Resume
