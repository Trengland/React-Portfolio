import React from 'react'
import me from '../../images/me-dogs.jpg'

function About() {
  return (
    <div>
    <section className="page-section" id="about">
    <h2>About Me</h2>
    <div id="test">
      <a href="https://www.linkedin.com/in/tiffany-england-39374b55/" target="_blank">
        <p><img id="profileimage" src={me}/>
        Accountable and optimistic - having a strong background and expertise in Digital Marketing. Currently enrolled and studying Full-stack Web Development through The Ohio State University. 
        According to multiple references, I am well organized, creative and an extremely hard working individual. I collaborate well as a team and as an individual. 
        Prior education in Behavior Psychology has allowed me to keep a curious and open mind regarding work, ideas, teammates, projects, etc. I like to think outside the box and I like for the people around me to feel comfortable. 
        <strong>Please look over my projects (below) and feel free to reach out with any questions, proposals, ideas, etc.</strong></p></a>
    </div>
  </section>
  </div>
  )
}

export default About