import React from 'react';
import SearchIcon from '../assets/search'; // Import Search component
import './css/Navbar.scss'; // Import SCSS styles

function Navbar() {
  return (
    <>
    <div className='custom-nav'>   
        <div className='custom-content'>
            <div className='custom-search'>
                <SearchIcon className='custom-search-btn'/> {/* Render Search component */}
                <input type="text" placeholder="Search..." className="custom-input" />
            </div>
            <div className='custom-category'> <p>Categories</p></div>
                
           
            <div className='custom-category'>  <p>Website Builders</p></div>
          
            <div className='custom-category'><p>Today's deals</p></div>
            
        </div>
    </div>
    </>
  );
}

export default Navbar;
