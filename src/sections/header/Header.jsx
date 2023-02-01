import React from 'react'

import phab from '../../assets/phabimage1.png'
import './header.css'
const Header = () => {
  return (
    <section className='container header-section'>
    <div className="right__header-container">
        <h1>Hi! I am Phabias Freelance photographer and internet provider...</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto mollitia aliquid at officiis quibusdam?</p>
        <div className="header-buttons">
          <a href="" className='btn primary'>Photography</a>
          <a href="" className='btn secondary'>Internet Supply</a>
        </div>
    </div>

    <div className="left__header-container">
      <img src={phab} alt="" />
    </div>
  </section>
  )
}

export default Header