import React from 'react'
import Nav from '../nav/nav'
import './style.css'

function Header({setCurrentPage}) {
  return (
    <div><header>
    <h1>Tiffany England</h1>
    <Nav setCurrentPage = {setCurrentPage}/>
  </header></div>
  )
}


export default Header
