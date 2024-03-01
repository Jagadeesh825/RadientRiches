import React from 'react'
import Tick from '../assets/Tick'
import Help from '../assets/Help'
import Down from '../assets/Down'
import Vector from '../assets/Vector'
import './css/header.scss' // Import SCSS module

function Header() {
  return (
    <div className='custom-header'>
        <h1 className='custom-heading'>Best Website builders in the US</h1>
        <hr className='custom-break'/>
        <div className='custom-update'>
            <div className='custom-left'>
                <Tick/>
                <p className='custom-gap'>Last Updated - February 22, 2020</p>
                <Help/>
                <p>Advertising Disclosure</p>
            </div>
            <div className='custom-right'>
                <p>Top Relevant</p>
                <Down/>
            </div>
        </div>
        <hr className='custom-break'/>
        <div className='custom-tools'>
            <div className='custom-tool1 custom-para'>Tools</div>
            <div className='custom-tool2 custom-para'>AWS Builder</div>
            <div className='custom-tool3 custom-para'>Start Build</div>
            <div className='custom-tool4 custom-para'>Build Supplies</div>
            <div className='custom-tool5 custom-para'>Tooling</div>
            <div className='custom-tool6 custom-para'>BlueHosting</div>
        </div>
        <div className='custom-root'>
            <p>Home</p>
            <Vector/>
            <p>Hosting for all</p>
            <Vector/>
            <p>Hosting</p>
            <Vector/>
            <p>Hosting6</p>
            <Vector/>
            <p>Hosting5</p>
        </div>
    </div>
  )
}

export default Header;
