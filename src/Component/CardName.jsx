import React from 'react'
import { useSelector } from 'react-redux';

const CardName = () => {
  const reduxData = useSelector((data) => data);

  return (
    <div>
        <h1>{reduxData.name}</h1>
    </div>
  )
}

export default CardName