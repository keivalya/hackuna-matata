import React from 'react'

const Section = ({ title, description, children, background }) => {
  return (
    <div className={background ? 'section section__withBackground' : 'section'}>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  )
}

export default Section
