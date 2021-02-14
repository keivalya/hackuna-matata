import React from 'react'
import { Link } from 'react-router-dom'

const Maker = ({ image, name, description, link }) => {
  return (
    <div className='maker'>
      <img src={image} alt='' />
      <Link to='#' className='link maker__name'>
        {name}
      </Link>
      <p className='maker__description'>{description}</p>
    </div>
  )
}

export default Maker
