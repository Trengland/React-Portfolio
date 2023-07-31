import React from 'react'
import me from '../../images/me-dogs.jpg'
import './style.css'

function About() {
  return (
    <div>
    <section className="page-section" id="about">
    <h2>About Me</h2>
    
    <div>
      <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tiffany-england-39374b55/">
      <img alt='profile' id="profileimage" src={me}/>
      </a>
      <p>Highly accountable and ever-optimistic, having a strong background and expertise in Digital Marketing & Communications. I am certified through The Ohio State University as a Full-stack Web Developer. 
        <br></br>
        <br></br>
        According to multiple references, I am an organized, creative and extremely hard working individual. I collaborate well as a team while remaining diligent as an individual. I value efficiency and thorough communication.
        <br></br>
        <br></br>
        Prior education in Behavioral Psychology has allowed me to keep a curious and open mind regarding work, ideas, teammates and projects. It also aids in my abilty to effectively communicate with any/all personality types.
        <br></br>
        <br></br>
        <br></br>
       </p>
    </div>
  </section>
  </div>
  )
}

export default About