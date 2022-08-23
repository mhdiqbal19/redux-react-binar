import React from 'react'
import './Index.css';
import { useSelector } from 'react-redux';

const NavbarImage = () => {
  const reduxData = useSelector((data) => data);

  return (
    <div>
      <img className='img-navbar' src={reduxData.img} alt="" />
    </div>
  )
}

export default NavbarImage
