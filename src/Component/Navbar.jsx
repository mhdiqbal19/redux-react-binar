import React from 'react'
import NavbarImage from './NavbarImage'
import NavbarName from './NavbarName'
import './Index.css';

const Navbar = () => {

  return (
    <div className='navbar__cont'>
        <NavbarImage/>
        <NavbarName/>
    </div>
  )
}

export default Navbar