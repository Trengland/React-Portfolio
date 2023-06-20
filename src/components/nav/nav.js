import React from 'react'
import './style.css'

function Nav({setCurrentPage}) {
  return (
<div>
    <nav>
    <button onClick={() => {
      setCurrentPage('About')
    }}>About Me</button>
    <button onClick= {() => {
      setCurrentPage('Projects')
    }}>My Projects</button>
    <button onClick={() => {
    setCurrentPage('Contact')
    }}>Contact Info</button>
  </nav>
</div>
  )
}

export default Nav