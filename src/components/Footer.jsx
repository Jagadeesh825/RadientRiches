import React from 'react'
import './css/Footer.scss'
import Down2 from '../assets/Down2'

function Footer() {
  return (
    <div className='footer'>
        <div className='categories'>
          <p className='head'>CATEGORIES</p>
          <p className='subject'>Web Builder</p>
          <p className='subject'>Hosting</p>
          <p className='subject'>Data Center</p>
          <p className='subject'>Robotic-Automation</p>
        </div>
        <div className='contact'>
          <p className='head'>CONTACT</p>
          <p className='subject'>Contact</p>
          <p className='subject'>Privacy Policy</p>
          <p className='subject'>Terms of Service</p>
          <p className='subject'>Categories</p>
          <p className='subject'>About</p>
        </div>
        <div className="location">
          <p>United States</p>
          <div className='sv'>
            <Down2/>
          </div>          
        </div>
    </div>
  )
}

export default Footer