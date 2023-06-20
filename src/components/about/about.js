import React from 'react'
import me from '../../images/me-dogs.jpg'

function About() {
  return (
    <div>
    <section className="page-section" id="about">
    <h2>About Me</h2>
    <div id="test">
      <a rel="noreferrer" href="https://www.linkedin.com/in/tiffany-england-39374b55/" target="_blank">Hello World</a>
        <img alt='profile' id="profileimage" src={me}/><p>
        Accountable and optimistic - having a strong background and expertise in Digital Marketing. Currently enrolled and studying Full-stack Web Development through The Ohio State University. 
        According to multiple references, I am well organized, creative and an extremely hard working individual. I collaborate well as a team and as an individual. 
        Prior education in Behavior Psychology has allowed me to keep a curious and open mind regarding work, ideas, teammates, projects, etc. I like to think outside the box and I like for the people around me to feel comfortable. 
        <br></br>
       <strong>Please look over my projects (below) and feel free to reach out with any questions, proposals, ideas, etc.</strong></p>
    </div>
  </section>
  </div>
  )
}

export default About