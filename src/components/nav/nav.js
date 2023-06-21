import React from 'react'
import './style.css'
import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
<div id="navItems" >
    <Link id="about" to="/">About</Link>
      <span>&nbsp;|&nbsp;</span>
    <Link id="about" to="/projects">Projects</Link>
      <span>&nbsp;|&nbsp;</span>
    <Link id="about" to="/contact">Contact</Link>
      <span>&nbsp;|&nbsp;</span>
    <Link id="about" to="/resume">Resume</Link>   
  <Outlet/>
</div>

)}

export default Nav
