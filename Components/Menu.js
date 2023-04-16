import React from 'react'

const Menu = ({name, img, price}) => {
  return (
    <div className='menuCard'>
        <img src={img} alt="Menu item img" />
        <h4>{name}</h4>
        <h4>Rs {price}</h4>
    </div>
  )
}

export default Menu