import React from 'react'
import './style.css'
import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
<div id="allnavItems" >
    <Link id="about" to="/">About</Link>
      <span>&nbsp;&nbsp;</span>
    <Link id="projects" to="/projects">Projects</Link>
      <span>&nbsp;&nbsp;</span>
    <Link id="contact" to="/contact">Contact</Link>
      <span>&nbsp;&nbsp;</span>
    <Link id="resume" to="/resume">Resume</Link>   
  <Outlet/>
</div>

)}

export default Nav
