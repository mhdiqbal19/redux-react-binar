import React from 'react'
import { useSelector } from 'react-redux';

const CardImage = () => {
  const reduxData = useSelector((data) => data);

  return (
    <div>
        <img src={reduxData.img} alt="" />
    </div>
  )
}

export default CardImage