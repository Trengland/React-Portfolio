import React from 'react';
import './style.css';
import resume from '../../images/icon-256x256.jpg';

function Resume() {
  const resumeUrl = 'https://docs.google.com/document/d/1HBI5CIlyqa3DUOjmyjcGz5Um0SZGufHfpi0wl4p6W1M/edit?usp=sharing';

  return (

    <div id="resumepage">
      <h1>Tiffany R England</h1>
      <p>(937) 580-6559</p>
      <p>tiffanyrengland@gmail.com</p>
      <h3><a href="https://www.linkedin.com/in/tiffany-england-39374b55/" target="_blank">LinkedIn Profile</a></h3>
      <h3><a href="https://github.com/Trengland" target="_blank">GitHub Profile</a></h3>
      <br></br>
      <a href={resumeUrl} target="_blank" rel="noreferrer">
     <img id="resumeImg" src={resume} alt="Resume" />
    </a>

<br>
</br>
<br></br>
      <h2>Summary</h2>
      <p>
        Accountable web developer and software engineer with 15+ years of combined experience in developemnt, communication and digital marketing.<br></br> 
        Well-organized, optimistic, creative, and a collaborative team player with a passion for continuous improvement.
      </p>
    <br></br>
    <br></br>
      <h2>Experience</h2>
      <h4>Full Stack Web Developer</h4>
      <p>January 2023 – July 2023 (current)</p>
      <ul>
        <li>Certified in Full Stack Web Development through The Ohio State University.</li>
        <li>Experienced in JavaScript, Advanced CSS (UI/UX), Git, Node, React, APIs, jQuery, Node.js, MERN, Express, databases & much more.</li>
        <li>Well-versed in MVC systems, PWA’s, and Agile development methodologies and team collaboration.</li>
        <li>Developed and contributed to various projects on GitHub.</li>
        <li>Consistently utilized the necessary skills to engineer a full-stack web application: servers, databases, and APIs.</li>
        <li>Combining new technologies and concepts to develop full-stack web apps.</li>
        <li>Utilized cutting-edge tools to optimize applications for speed and efficiency.</li>
      </ul>
    <br></br>
      <h4>Senior Marketing Representative - Vivial, Inc.</h4>
      <p>February 2016 – July 2023 (7+ years)</p>
      <ul>
        <li>Managed face-to-face sales and high-level client marketing campaigns.</li>
        <li>Highly skilled in various digital marketing channels, including social media, PPC advertising, SEO, behavioral targeting, email/text, business analytics & more.</li>
        <li>Skilled in web design, marketing software management, and overall branding for any size business.</li>
      </ul>
    <br></br>
      <h4>Communications Leader - Nationwide Biweekly Admin (NBA)</h4>
      <p>January 2010 - November 2015 (5+ years)</p>
      <ul>
        <li>Led company-wide communications and reported to the Vice President of Operations.</li>
        <li>Developed and implemented communication strategies to enhance the organization's reputation, sales & training results, etc.</li>
        <li>Trained all new employees and consistently worked with staff and employees for improved sales and workflows throughout the company.</li>
        <li>Certified Session Leader for Versatile Salesperson training course by Wilson Learning Corporation.</li>
      </ul>
    <br></br>
      <h4>Market Research Analyst - Burke, Inc.</h4>
      <p>June 2004 - December 2009 (5+ years)</p>
      <ul>
        <li>Conducted consumer surveys and data entry for top-name brand products in the United States.</li>
        <li>Gathered and utilized customer feedback to improve product satisfaction.</li>
        <li>Proficient in all Microsoft Office tools and ensured exceptional customer satisfaction.</li>
      </ul>
    <br></br>
    <br></br>
      <h2>Education</h2>
      <ul>
        <li>Full Stack Web Development - <span>The Ohio State University</span>, 2023</li>
        <li>Software Development Specialist - <span>Mimo Certification</span>, 2023</li>
        <li>Associate degree in Behavioral Psychology, <span>Sinclair College</span>, 2019</li>
        <li>Certified Session Leader – Sales & Communication, <span>Wilson Learning</span>, 2016</li>
        <li>Associate degree in marketing, <span>Greene County Career Center</span>, 2004</li>
      </ul>
    <br></br>
      <h2>Skills</h2>
      <ul>
        <li>Web Development/ Software Engineering – Certified in both front-end & back-end (OSU)</li>
        <li>Digital Marketing: social media, PPC/SEM, SEO, branding, web design</li>
        <li>Project Management: Team collaboration & motivation</li>
        <li>Verbal & non-verbal Communication: ability to effectively convey complex technical concepts to both technical and non-technical stakeholders.</li>
        <li>Mindset - My dynamic and optimistic personality not only fosters a positive and motivating work environment but also creates lasting business relationships.</li>
      </ul>
    </div>
    // <div id="resumepage">
    //   <h2>My Resume</h2>
    //   <br />
    //   <a href={resumeUrl} target="_blank" rel="noreferrer">
    //     <img id="resumeImg" src={resume} alt="Resume" />
    //   </a>
    //   <br />
    //   <br />
    //   <h3>I appreciate your interest in my work! Please feel free to reach out with any questions, thoughts, ideas, etc.</h3>
    // </div>
  );
}

export default Resume;

